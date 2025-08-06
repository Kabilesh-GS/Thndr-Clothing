import './CartButton.style.scss'

import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({onclick}) => {
  return (
    <button className='button' onClick={onclick}>
      <FaShoppingCart/>
      <div>ADD TO CART</div>  
    </button>
  )
}

export default CartButton;