import css from "./form.module.css";

export default function Form() {
    const handleSubmit = (formData: FormData) => {
        const username = formData.get("user")
        const email = formData.get("email")
    const transport = formData.get("transport");

      if (!email) {
      alert("Заповни имейл");
      return;
    }
      
      if (!username) {
      alert("заповни имя");
      return;
    }
      
    if (!transport) {
      alert("Выберите транспорт");
      return;
    }
  };

  return (
    <div className={css.wrapper}>
      <form action={handleSubmit} className={css.form}>
        <h1 className={css.title}>Forma ВПО</h1>

        <fieldset className={css.fieldset}>
          <label className={css.label}>User</label>
          <input className={css.input} type="text" name="user" />

          <label className={css.label}>Email</label>
          <input className={css.input} type="email" name="email" />
        </fieldset>

              <fieldset className={css.fieldset}>
                  <h2 className={css.title}>Доставка:</h2>
          <div className={css.radioGroup}>
            <label><input type="radio" name="transport" value="Дрон" /> Дрон</label>
            <label><input type="radio" name="transport" value="Пешком" /> Пешком</label>
            <label><input type="radio" name="transport" value="Машиной" /> Машиной</label>
            <label><input type="radio" name="transport" value="Самолетом" /> Самолетом</label>
            <label><input type="radio" name="transport" value="Поездом" /> Поездом</label>
          </div>
        </fieldset>

        <button className={css.button} type="submit">Submit</button>
      </form>
    </div>
  );
}