const { Box, Button, FormField, TextInput, TextArea } = require('grommet')

const Index = () => (
  <Box
    as="form"
    method="post"
    action="/contact"
  >
    <fieldset>
      <legend>your email</legend>
      <FormField label="From" value="">
        <TextInput name="from" />
      </FormField>
      <FormField label="To" value="">
        <TextInput name="to" />
      </FormField>
      <FormField label="Body text" value="">
        <TextArea
          name="emailBody"
        />
      </FormField>
    </fieldset>
    <Button
      alignSelf="end"
      label="Send"
      type="submit"
    />
  </Box>
);

export default Index;