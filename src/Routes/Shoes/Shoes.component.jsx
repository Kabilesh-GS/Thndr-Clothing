import Products from "../../Components/Products/Products.component";

const Shoes = () => {
  const products = [
    {
      id : 1,
      name: 'Sneakers',
      price: 14.99,
      rating : 4.1
    },
    {
      id : 2,
      name: 'Loafers',
      price: 19.99,
      rating : 4.6
    },
    {
      id : 3,
      name: 'High Heels',
      price: 25.99,
      rating : 4.0
    },
    {
      id : 4,
      name: 'Hiking Boots',
      price: 29.99,
      rating : 4.3
    },
    {
      id : 5,
      name: 'Crocs',
      price: 9.99,
      rating : 4.7
    }
  ]

  return (
    <Products products={products}/>
  )
}

export default Shoes;