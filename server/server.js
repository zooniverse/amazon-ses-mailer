const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" })
const params = {
  Destination: {
    ToAddresses: [] // Email address/addresses that you want to send your email
  },
  Message: {
    Body: {
      Text: {
        Charset: "UTF-8",
        Data: ""
      }
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email"
    }
  },
  Source: ""
};

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/contact', (req, res) => {
    const { emailBody, from, to } = req.body
    params.Source = from
    params.Destination.ToAddresses.push(to)
    params.Message.Body.Text.Data = emailBody
    const sendEmail = ses.sendEmail(params).promise()
    sendEmail
      .then(function emailSent(data) {
        console.log(data)
        res.send(`Email sent! ${data}`)
      })
      .catch(function emailFailed(error) {
        console.log(error)
        res.send(error.message)
      })
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})