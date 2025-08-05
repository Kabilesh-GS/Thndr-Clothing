import Products from "../../Components/Products/Products.component";

const Tees = () => {
  const products = [
    {
      id : 1,
      name: 'Regular Tee',
      price: 4.99,
      rating : 4.1,
      image : 'https://bananaclub.co.in/cdn/shop/files/GreyishBlueRegularT-shirt_5.jpg'
    },
    {
      id : 2,
      name: 'Oversized Tee',
      price: 9.99,
      rating : 4.0,
      image : 'https://fansarmy.in/cdn/shop/products/front_ec21b800-14cd-4594-8561-d506f6b8c764.jpg'
    },
    {
      id : 3,
      name: 'Printed Tee',
      price: 5.99,
      rating : 4.6,
      image: 'https://m.media-amazon.com/images/I/71YEIVXS6tL._UY1100_.jpg'
    },
    {
      id : 4,
      name: 'Polo Tee',
      price: 14.99,
      rating : 3.6,
      image : 'https://caslay.in/cdn/shop/files/0W2A7824.jpg'
    },
    {
      id : 5,
      name: 'Full Sleve Tee',
      price: 6.99,
      rating : 4.7,
      image: 'https://veirdo.in/cdn/shop/files/ai_10.jpg'
    }
  ]
  
  return (
    <Products products={products}/>
  )
}

export default Tees;