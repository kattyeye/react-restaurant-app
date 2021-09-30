import { useState } from "react";
import "./App.css";
import MenuList from "./MENU/MenuList";
import menuItems from "./UTILITIES/Menu.js";

function App() {
  const [order, setOrder] = useState([]);

  // function addToOrder(item) {
  //   const newOrder = { item };
  // }

  return (
    <div className="App">
      Restaurant App
      <nav className="nav-bar">
        <ul>
          <li>
            <button>MENU</button>
          </li>
          <li>
            <button>MY ORDER</button>
          </li>
        </ul>
      </nav>
      <main>
        {order &&
          order.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
              </div>
            );
          })}
        <MenuList menuItems={menuItems} order={order} setOrder={setOrder} />
      </main>
    </div>
  );
}

export default App;
