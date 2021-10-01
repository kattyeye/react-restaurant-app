import { useState, useEffect } from "react";
import "./App.css";
import MenuList from "./MENU/MenuList";
import menuItems from "./UTILITIES/Menu.js";
import Order from "./ORDER/Order";

const BASE_URL = "https://tiny-taco-server.herokuapp.com/debbies-pizza/";

function App() {
  const [order, setOrder] = useState([]);
  const [selection, setSelection] = useState("menuScreen");

  async function addOrder(order, name, phoneNumber) {
    // this function allows us to add a new order to the api
    const newOrder = { order, name, phoneNumber }; // this is what it means to be an order
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (response.ok) {
      const data = await response.json();
      setOrder([...order, data]);
    }
  }

  let html;

  if (selection === "menuScreen") {
    html = <MenuList menuItems={menuItems} order={order} setOrder={setOrder} />;
  } else if (selection === "orderScreen") {
    html = <Order order={order} setOrder={setOrder} addOrder={addOrder} />; // this is where the order state is being passed to Order comp.
    {
      order &&
        order.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <p>${item.price.toString()}</p>
            </div>
          );
        });
    }
  }

  {
    /*useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASE_URL}`).catch(handleError);
      if (response.ok) {
        const data = await response.json().catch(handleError);
        setOrder(data);
      }
    }
    fetchData();
  }, []);

  function addToOrder(item) {
    const newOrder = { item, price }; //this is what it means to be an Order
    const response = fetch(`${BASE_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newOrder),
    });
    if (response.ok) {
      const data =  response.json();
      setOrder([...orders, data]);
    }
  }*/
  }

  return (
    <div className="App">
      <h1>Debbie's Pizza Palace</h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <button type="button" onClick={() => setSelection("menuScreen")}>
              MENU
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSelection("orderScreen")}>
              MY ORDER
            </button>
          </li>
        </ul>
      </nav>
      <main>
        {html}

        {/* {order &&
          order.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <p>${item.price.toString()}</p>
              </div>
            );
          })} */}
      </main>
      <form></form>
    </div>
  );
}

export default App;
