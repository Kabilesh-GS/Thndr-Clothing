import Products from "../../Components/Products/Products.component";

const Shades = () => {
const products = [
    {
      id : 1,
      name: 'Round',
      price: 9.99,
      rating : 4.0
    },
    {
      id : 2,
      name: 'Aviators',
      price: 14.99,
      rating : 4.8
    },
    {
      id : 3,
      name: 'Wayfarers',
      price: 16.99,
      rating : 4.3
    },
    {
      id : 4,
      name: 'Wrap',
      price: 19.99,
      rating : 4.2
    },
    {
      id : 5,
      name: 'Clubmaster',
      price: 24.99,
      rating : 4.5
    }
  ]

  return(
    <Products products={products}/>
  )
}

export default Shades;