import formatPrice from "../UTILITIES/formatPrice";

export default function MenuItem(props) {
  let item = props.item;

  return (
    <div className="menu-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <p>{formatPrice(item.price)} </p>

      <button className="addbutton" onClick={() => props.onAdd()}>
        Add to Order
      </button>
    </div>
  );
}
