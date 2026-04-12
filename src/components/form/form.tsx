
import css from "./form.module.css";

interface OrderFormProps {
  onSubmit: (value: string) => void;
}


export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    onSubmit(username);
  };

    return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        
        <label className={css.label}>
          Username
          <input type="text" name="username" />
        </label>

        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Place order</button>
      </form>
    </div>
  );
}