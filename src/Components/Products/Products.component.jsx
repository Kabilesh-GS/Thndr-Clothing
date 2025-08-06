import './Products.style.scss'
import { FaStar } from "react-icons/fa";
import { addCart,auth } from '../../Utility/Firebase/Firebase.utils';
import {useAuthState} from 'react-firebase-hooks/auth';

const Products = ({products}) => {
  const [user] = useAuthState(auth);
  const addToCart = async (e) => {
    await addCart(e, user);
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
          </div>
          <button onClick={() => {addToCart(e)}}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products;