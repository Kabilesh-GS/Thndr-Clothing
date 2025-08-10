import './CartProducts.style.scss'
import Button from '../Button/Button.component';
import PopupCart from '../PopupCart/PopupCart.component';

import { FaStar } from "react-icons/fa";
import { useEffect, useState } from 'react';

const CartProducts = ({products}) => {

  const [Popup,setPopup] = useState(false);
  useEffect(() => {
    const OuterEle = document.getElementById('outer');
    if(OuterEle){
      OuterEle.style.filter = Popup ? 'blur(5px)'  : 'blur(0px)';
    }
  },[Popup])

  return(
    <>
    <div className='Outer' id='outer'>
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
      <Button children='checkout' buttonType='inverted'  onClick={() => {setPopup(true)}}/>
    </div>
    <PopupCart trigger={Popup} products={products} click={() => {setPopup(false)}}/>
    </>
  )
}

export default CartProducts;