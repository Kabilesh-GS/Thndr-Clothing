import "./PopupCart.style.scss";

const PopupCart = (props) => {  

  let total = 0;
  let totalDelivery = 0;
  const calculateTotal = () => {
    props.products.forEach((e) => (
      total += (e.price * e.quantity)
    ))
  }
  calculateTotal();

  if(total<200) {
    totalDelivery = total + 15;
  }
  else{
    totalDelivery = total;
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popupContainer">
        <h3>Check-Out Menu</h3>
        {props.products.map((e) => (
          <div className="items" key={e.id}>
            <div>
              <p className="name">{e.name}</p>
              <div>
                <p>$&nbsp;{e.price}</p>
                <p>&nbsp; x &nbsp;</p>
                <p>{e.quantity}</p>
              </div>
            </div>
            <p>$&nbsp;{(e.price * e.quantity).toFixed(2)}</p>
          </div>
        ))}
        {total < 200 ? <p className="deliveryHike">Delivery Charges Applied $15</p> : ""}
        <p className="totalPrice">$&nbsp;{totalDelivery.toFixed(2)}</p>
        <button onClick={props.click}>X</button>
      </div>
    </div>
  ) : "";
};

export default PopupCart;
