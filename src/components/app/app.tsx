

export default function App() {
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username")
    console.log(username)
   }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
      <input type="text" name="username" id="username" />
        <button type="submit">Submit</button>
      </form>
     
    </>
  )
}