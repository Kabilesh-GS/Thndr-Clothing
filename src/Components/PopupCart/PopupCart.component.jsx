import "./PopupCart.style.scss";

const PopupCart = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popupContainer">
        <h3>Check-Out Menu</h3>
        <table className="items">
          {props.products.map((e) => (
            <tr>
              <td>{e.name}</td>
              <td>${e.price}</td>
              <td>x</td>
              <td>{e.quantity}</td>
              <td className="totalPricePer">{(e.price * e.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </table>
        <button onClick={props.click}>X</button>
      </div>
    </div>
  ) : "";
};

export default PopupCart;
