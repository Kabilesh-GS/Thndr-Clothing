import Products from "../../Components/Products/Products.component";

const Hats = () => {
    const products = [
    {
      id : 1,
      name: 'Baseball Cap',
      price: 5.99,
      rating : 4.1
    },
    {
      id : 2,
      name: 'Fez',
      price: 9.99,
      rating : 4.8
    },
    {
      id : 3,
      name: 'Beanie',
      price: 3.99,
      rating : 4.0
    },
    {
      id : 4,
      name: 'Visor',
      price: 12.99,
      rating : 4.6
    },
    {
      id : 5,
      name: 'Cowboy Hat',
      price: 10.99,
      rating : 4.7
    }
  ]

  return (
    <Products products={products} />
  )
}

export default Hats; 