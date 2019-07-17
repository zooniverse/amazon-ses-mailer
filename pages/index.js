import '../css/style.css'

const Index = () => (
  <form
    method="post"
    action="/contact"
  >
    <fieldset>
      <legend>your email</legend>
      <label>From <input type="text" name="from" defaultValue="" /></label>
      <label>To <input type="text" name="to" defaultValue="" /></label>
      <label>
        Body text
        <textarea
          name="emailBody"
        >
        </textarea>
      </label>
    </fieldset>
    <button
      type="submit"
    >
      Send
    </button>
  </form>
);

export default Index;