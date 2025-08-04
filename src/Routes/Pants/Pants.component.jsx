import Products from "../../Components/Products/Products.component";

const Pants = () => { 
    const products = [
    {
      id : 1,
      name: 'Jean',
      price: 9.99,
      rating : 4.1
    },
    {
      id : 2,
      name: 'Baggy Jean',
      price: 14.99,
      rating : 4.0
    },
    {
      id : 3,
      name: 'Tracks',
      price: 7.99,
      rating : 4.6
    },
    {
      id : 4,
      name: 'Shorts',
      price: 4.99,
      rating : 3.6
    },
    {
      id : 5,
      name: 'Formals',
      price: 19.99,
      rating : 4.7
    }
  ]

  return(
    <Products products={products}/>
  )
}

export default Pants;