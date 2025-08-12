import Products from "../../Components/Products/Products.component";

const Tees = () => {
  const products = [
    {
      id : 'T1',
      name: 'Regular Tee',
      price: 4.99,
      rating : 4.1,
      quantity: 5,
      image : 'https://bananaclub.co.in/cdn/shop/files/GreyishBlueRegularT-shirt_5.jpg'
    },
    {
      id : 'T2',
      name: 'Oversized Tee',
      price: 9.99,
      rating : 4.0,
      quantity: 10,
      image : 'https://fansarmy.in/cdn/shop/products/front_ec21b800-14cd-4594-8561-d506f6b8c764.jpg'
    },
    {
      id : 'T3',
      name: 'Printed Tee',
      price: 5.99,
      rating : 4.6,
      quantity: 17,
      image: 'https://m.media-amazon.com/images/I/71YEIVXS6tL._UY1100_.jpg'
    },
    {
      id : 'T4',
      name: 'Polo Tee',
      price: 14.99,
      rating : 3.6,
      quantity: 7,
      image : 'https://caslay.in/cdn/shop/files/0W2A7824.jpg'
    },
    {
      id : 'T5',
      name: 'Full Sleve Tee',
      price: 6.99,
      rating : 4.7,
      quantity: 6,
      image: 'https://veirdo.in/cdn/shop/files/ai_10.jpg'
    },
    {
      id : 'T6',
      name: 'Sleveless Tee',
      price: 8.99,
      rating : 4.7,
      quantity: 10,
      image: 'https://iciw.centracdn.net/client/dynamic/images/10703_a67d2568c6-13192-021-1-1350x0.jpg'
    },
    {
      id : 'T7',
      name: 'V neck Tee',
      price: 5.99,
      rating : 3.6,
      quantity: 5,
      image: 'https://src1.ilogo.in/images/products/8473/custom-mens-v-neck-t-shirt.webp'
    }
  ]
  
  return (
    <Products products={products}/>
  )
}

export default Tees;