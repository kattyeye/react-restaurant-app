import { useState } from "react";
import formatPrice from "../UTILITIES/formatPrice";

function Order(props) {
  const orderHTML = props.order.items.map((item) => {
    return (
      <div>
        <h4>{item.name}</h4>
        <p>{formatPrice(item.price)}</p>
      </div>
    );
  });

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.addOrder(props.order, name, phoneNumber);
    setName("");
    setPhoneNumber("");
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleNumChange(e) {
    setPhoneNumber(e.target.value);
  }

  function subtotal() {
    let total = 0;
    props.order.items.forEach((item) => {
      total = total + item.price;
    });
    console.log({ total });

    return total;
  }

  return (
    <div className="order-display">
      {orderHTML}
      <p>Total: {formatPrice(subtotal())}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <h4>Please enter you name and number to continue.</h4>
          </label>
          <input
            name="name-input"
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="name"
          />
          <input
            name="phone-num-input"
            value={phoneNumber}
            onChange={handleNumChange}
            type="tel"
            placeholder="phone"
          />
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
