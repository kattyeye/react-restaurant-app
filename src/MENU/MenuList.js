// import menuItems from "../UTILITIES/Menu";
import MenuItem from "./MenuItem";

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

    console.log(item);
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
  const categories = {
    Pizzas: {
      path: "public/pizza.jpg",
      alt: "Cheese pizza surrounded by decorative garnish",
    },
    Salads: {
      path: "public/salad.jpg",
      alt: "greens with goat cheese",
    },
    Desserts: {
      path: "public/salad.jpg",
      alt: "cannolis",
    },
    Beverages: {
      path: "public/salad.jpg",
      alt: "soda",
    },
  };

  console.log("menu items", menuItems);

  const category = menuItems[0]?.category;
  console.log("category", category);
  return (
    <div>
      {category && (
        <img src={categories[category].path} alt={categories[category].alt} />
      )}

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
