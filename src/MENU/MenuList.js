import formatPrice from "../UTILITIES/formatPrice";

function MenuList(props) {
  const menuItems = props.menuItems;

  //   menuItems.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div>
      {menuItems.map((item, index) => {
        return (
          <div key={index} className="menu-container">
            <div className="menu-images">
              <img src={item.sectionImage.path} alt={item.sectionImage.alt} />
            </div>
            <div className="menu-text">
              <h2> {item.name}</h2>

              {item.menuItems.map((childItem, childIndex) => {
                return (
                  <div key={`${index} ${childIndex}`}>
                    <h4>{childItem.name}</h4>
                    <p>{childItem.description}</p>
                    <p>{formatPrice(childItem.price)} </p>

                    <button
                      onClick={() => {
                        props.setOrder([
                          ...props.order,
                          {
                            name: childItem.name,
                            price: childItem.price,
                          },
                        ]);
                        console.log({
                          name: childItem.name,
                          price: childItem.price,
                        });
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
