import { useState, useEffect } from "react";
import "./App.css";
import MenuList from "./MENU/MenuList";
import menuItems from "./UTILITIES/Menu.js";
import Order from "./ORDER/Order";
import formatPrice from "./UTILITIES/formatPrice";
const BASE_URL = "https://tiny-taco-server.herokuapp.com/debbies-pizza/";

function App() {
  const [order, setOrder] = useState({ items: [], submitted: false });
  const [selection, setSelection] = useState("menuScreen");

  async function addOrder(order, name, phoneNumber) {
    // this function allows us to add a new order to the api
    const newOrder = { order: order.items, name, phoneNumber }; // this is what it means to be an order
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (response.ok) {
      setSelection("successScreen");

      localStorage.setItem(
        "order",
        JSON.stringify({ ...order, submitted: true })
      );
    }
  }

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order"));
    setOrder(storedOrder || { items: [], submitted: false });
  }, []);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order"));
    if (storedOrder && storedOrder.submitted === true) {
      console.log({ order });
      localStorage.clear();
    }

    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  let html;

  if (selection === "menuScreen") {
    html = (
      <MenuList
        menuItems={menuItems}
        order={order}
        setOrder={setOrder}
        addOrder={addOrder}
      />
    );
  } else if (selection === "orderScreen") {
    html = <Order order={order} setOrder={setOrder} addOrder={addOrder} />; // this is where the order state is being passed to Order comp.
    {
      order.items.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{formatPrice(item.price)}</p>
          </div>
        );
      });
    }
  } else if (selection === "successScreen") {
    html = (
      <div className="success-card-container">
        {" "}
        <div className="success-card">
          {" "}
          <h3>
            Thank you for your order! It will be ready for pickup shortly.
          </h3>
          <h4>Payment upon pickup.</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="title">
        <h1>Debbie's Pizza Palace</h1>
      </header>

      <nav className="nav-bar">
        <ul>
          <li>
            <button type="button" onClick={() => setSelection("menuScreen")}>
              MENU
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSelection("orderScreen")}>
              MY ORDER ({order.items.length})
            </button>
          </li>
        </ul>
      </nav>
      <main>{html}</main>
    </div>
  );
}

export default App;
