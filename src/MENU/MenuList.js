// import menuItems from "../UTILITIES/Menu";
import MenuItem from "./MenuItem";
import Desserts from "./../images/cannoli.jpg";
import Pizzas from "./../images/pizza.jpg";
import Salads from "./../images/salad.jpg";
import Beverages from "./../images/soda.jpg";

function MenuList(props) {
  const menuItems = props.menuItems;

  function addToOrder(item) {
    if (props.order.submitted === true) {
      props.setOrder({
        submitted: false,
        items: [item],
      });
    } else {
      props.setOrder({
        ...props.order,
        items: [...props.order.items, item],
      });
    }

    console.log("item", item);
  }

  // let html = '';

  // // const categories = [...new Set(props.menuItems.map(item => item.category))];
  // categories.map(category => {
  //   props.menuItems
  //     .filter(menuItem => menuItem.category === category)
  //     .map(menuItem => {
  //       html += (

  //       )
  //     })
  // })
  // const categories = {
  //   Pizzas: {
  //     path: "./pizza.jpg",
  //     alt: "Cheese pizza surrounded by decorative garnish",
  //   },
  //   Salads: {
  //     path: "./salad.jpg",
  //     alt: "greens with goat cheese",
  //   },
  //   Desserts: {
  //     path: "./salad.jpg",
  //     alt: "cannolis",
  //   },
  //   Beverages: {
  //     path: "./salad.jpg",
  //     alt: "soda",
  //   },
  // };

  // console.log("menu items", menuItems);

  const category = menuItems[0]?.category;

  console.log("category", category);
  return (
    <div className="menu-items-img-section">
      {category == "Beverages" && <img src={Beverages} alt="alt text here" />}
      {category == "Desserts" && <img src={Desserts} alt="alt text here" />}
      {category == "Salads" && <img src={Salads} alt="alt text here" />}
      {category == "Pizzas" && <img src={Pizzas} alt="alt text here" />}

      {menuItems.map((menuItem) => {
        return (
          <MenuItem
            category={category}
            key={menuItem.id}
            item={menuItem}
            onAdd={() => addToOrder(menuItem)}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
