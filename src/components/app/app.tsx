
import css from "../form/form.module.css"
import OrderForm from "../form/form"

export default function App() {
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
    // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };

  return (
    <>
      <h1 className={css.wrappers}>Форма</h1>
      <OrderForm onSubmit={handleOrder} />
    </>
  );
}
