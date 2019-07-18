const { Button, FormField, TextInput, TextArea } = require('grommet')

const Index = () => (
  <form
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
  </form>
);

export default Index;