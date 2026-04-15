



export default function App() {
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
    const form = event.currentTarget;
        const formData = new FormData(form);
        form.reset();
    console.log(formData.get("uzername"));}
    
    return (
        <>
            <h1>Forma</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="uzername" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}