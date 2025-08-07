import './Products.style.scss'
import CartButton from '../CartButton/CartButton.component';

import { FaStar } from "react-icons/fa";
import { addCart,auth } from '../../Utility/Firebase/Firebase.utils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({products}) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [quantity,setQuantity] = useState(0);

  const addToCart = async (e) => {
    if(user){
      if(quantity<=e.quantity && quantity > 0){
        await addCart(e, user,quantity);
      }
      else{
        window.alert(`Only ${e.quantity} piece(s) is available`);
      }
    }
    else{
      navigate("/authentication");
    }
  }

  return(
    <div className='mainContainer'>
      {products.map((e) => (
        <div key={e.id} className='itemContainer'>
          <div className='productImage'>
            <img className='image' src={e.image} />
          </div>
          <div className='productDetails'>
            <h3 className='name'>{e.name}</h3>
            <p className='rating'><FaStar/> {e.rating}</p>
            <p className='price'>$ {e.price}</p>
            <p>Available : {e.quantity}</p>
            <input min={1} type='number' placeholder='Quantity' onChange={(e)=>{setQuantity(e.target.value)}}/>
          </div>
          <CartButton onclick={() => {addToCart(e)}}/>
        </div>
      ))}
    </div>
  )
}

export default Products;