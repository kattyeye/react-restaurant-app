function MenuList(props) {
  const menuItems = props.menuItems;
  return (
    <div>
      {menuItems.map((item) => {
        return (
          <div key={item.name.toLowerCase()} className="menu-container">
            <div className="menu-images">
              <img src={item.sectionImage.path} alt={item.sectionImage.alt} />
            </div>
            <div className="menu-text">
              <h2> {item.name}</h2>
              {item.menuItems.map((childItem) => {
                return (
                  <div key={item.id}>
                    <h4>{childItem.name}</h4>
                    <p>{childItem.description}</p>
                    <p>${childItem.price.toString()}</p>
                    <button
                      onClick={() => {
                        props.setOrder([
                          ...props.order,
                          { name: childItem.name, price: childItem.price },
                        ]);
                      }}
                    >
                      Add to Order
                    </button>
                  </div>
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
