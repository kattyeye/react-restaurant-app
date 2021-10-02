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

  return (
    <div>
      {menuItems.map((category, index) => {
        return (
          <div key={index} className="menu-container">
            <div className="menu-images">
              <img
                src={category.sectionImage.path}
                alt={category.sectionImage.alt}
              />
            </div>
            <div className="menu-text">
              <h2>{category.name}</h2>

              {category.menuItems.map((item, childIndex) => {
                return (
                  <MenuItem
                    key={childIndex}
                    item={item}
                    onAdd={() => addToOrder(item)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuList;
