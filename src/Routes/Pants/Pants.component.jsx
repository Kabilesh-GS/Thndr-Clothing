import Products from "../../Components/Products/Products.component";

const Pants = () => { 
    const products = [
    {
      id : 1,
      name: 'Jean',
      price: 9.99,
      rating : 4.1,
      image : 'https://basicslife.com/cdn/shop/files/BJN56151F.jpg'
    },
    {
      id : 2,
      name: 'Baggy Jean',
      price: 14.99,
      rating : 4.0,
      image : 'https://m.media-amazon.com/images/I/81M6E5ykdmL._UY1100_.jpg'
    },
    {
      id : 3,
      name: 'Tracks',
      price: 7.99,
      rating : 4.6,
      image : 'https://m.media-amazon.com/images/I/71wT1h5hGwL._UY350_.jpg'
    },
    {
      id : 4,
      name: 'Shorts',
      price: 4.99,
      rating : 3.6,
      image : 'https://i.etsystatic.com/13008011/r/il/8f8cc9/2002212026/il_570xN.2002212026_ekgd.jpg'
    },
    {
      id : 5,
      name: 'Formals',
      price: 19.99,
      rating : 4.7,
      image : 'https://i.pinimg.com/474x/7e/63/51/7e6351d9965c4c66adf28aafbcb358b4.jpg'
    }
  ]

  return(
    <Products products={products}/>
  )
}

export default Pants;