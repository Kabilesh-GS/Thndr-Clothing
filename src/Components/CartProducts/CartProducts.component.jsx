import './CartProducts.style.scss'

import { FaStar } from "react-icons/fa";

const CartProducts = ({products}) => {
  return(
    <div className='MainContainer'>
      {products.map((e) => (
        <div key={e.id} className='itemContainer'>
          <div className='productImage'>
            <img className='image' src={e.image} />
          </div>
          <div className='productDetails'>
            <h3 className='name'>{e.name}</h3>
            <p className='rating'><FaStar/> {e.rating}</p>
            <p className='price'>$ {e.price} x {e.quantity} (Quantity)</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartProducts;