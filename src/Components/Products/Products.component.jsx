import './Products.style.scss'
import { FaStar } from "react-icons/fa";

const Products = ({products}) => {
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
        </div>
      ))}
    </div>
  )
}

export default Products;