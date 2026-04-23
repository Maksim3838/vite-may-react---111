

export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event. preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("user") as string;
    if (!username.trim()) {
     alert("Заповни поле");
      return;
    }
    console.log(username);
    form.reset();

}
  
  return (
    <> <h1>Form</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">User</label>
        <input type="text" name="user" id="username" />
        <button type="submit">Submit</button>
    </form></>
  
  )
}