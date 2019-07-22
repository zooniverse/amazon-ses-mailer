# amazon-ses-mailer
A simple email client using NextJS and Amazon SES

With Docker, build and run a local copy of the app on http://localhost:3000
```sh
docker-compose build
docker-compose up
````

The server-side code needs your AWS details in order to send email and will look for them in the following environment variables:
```
Access key: AWS_ACCESS_KEY_ID,
Secret: AWS_SECRET_ACCESS_KEY,
Region: AWS_REGION
```
All three need to be defined, otherwise sending an email will fail with an API error.


