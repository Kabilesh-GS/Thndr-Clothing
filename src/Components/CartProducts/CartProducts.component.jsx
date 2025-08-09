import './CartProducts.style.scss'
import Button from '../Button/Button.component';

import { FaStar } from "react-icons/fa";

const CartProducts = ({products}) => {

  const click = () => {
    let a = 0;
    products.forEach((e) => (
      a += e.price * e.quantity
    ));
    window.alert(`Total cost is $${a.toFixed()}`);
  } 

  return(
    <div className='Outer'>
      <div className='MainContainer'>
        {products.map((e) => (

          <div key={e.id} className='itemContainer'>
            <div className='productImage'>
              <img className='image' src={e.image} />
            </div>
            <div className='productDetails'>
              <h3 className='name'>{e.name}</h3>
              <p className='rating'><FaStar/> {e.rating}</p>
              <p className='price'>$ {(e.price * e.quantity).toFixed(2)} <span>Quan({e.quantity})</span></p>
            </div>
          </div>
        ))}
      </div>
      <Button children='checkout' buttonType='inverted' onClick={() => {click(products)}}/>
    </div>
  )
}

export default CartProducts;