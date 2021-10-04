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
    <div className="order-container">
      {" "}
      <div className="order-display">
        <h3>order details</h3>
        {orderHTML}
        <p>Total: {formatPrice(subtotal())}</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <h4>Please enter your name and number to complete order.</h4>
            </label>
            <input
              name="name-input"
              value={name}
              onChange={handleNameChange}
              type="text"
              placeholder="Name"
              style={{ fontFamily: "Montserrat" }}
            />
            <input
              name="phone-num-input"
              value={phoneNumber}
              onChange={handleNumChange}
              type="tel"
              placeholder="Phone"
              style={{ fontFamily: "Montserrat" }}
            />
            <button className="submitbtn" type="submit">
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;
