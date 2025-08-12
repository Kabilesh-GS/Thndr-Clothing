import Products from "../../Components/Products/Products.component";

const Shoes = () => {
  const products = [
    {
      id : 'S1',
      name: 'Sneakers',
      price: 14.99,
      rating : 4.1,
      quantity: 10,
      image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/8/j/h/-original-imah25hqujuqvhwy.jpeg?q=90&crop=false'
    },
    {
      id : 'S2',
      name: 'Loafers',
      price: 19.99,
      quantity: 6,
      rating : 4.6,
      image: 'https://sparrods.com/cdn/shop/articles/Albert_tassel_loafer_in_espresso_worn_without_socks_2000x.jpg?v=1739914069'
    },
    {
      id : 'S3',
      name: 'High Heels',
      price: 25.99,
      rating : 4.0,
      quantity: 20,
      image: 'https://i.etsystatic.com/25449844/r/il/2a036c/4176531689/il_570xN.4176531689_5fxd.jpg'
    },
    {
      id : 'S4',
      name: 'Hiking Boots',
      price: 29.99,
      rating : 4.3,
      quantity: 17,
      image: 'https://www.fjern.equipment/cdn/shop/files/fjern-womens-sokande-hiking-boots-sandstone-14_2048x.jpg?v=1728658916'
    },
    {
      id : 'S5',
      name: 'Crocs',
      price: 9.99,
      rating : 4.7,
      quantity: 30,
      image: 'https://images.meesho.com/images/products/380664375/k1dmv_512.webp?width=512'
    },
    {
      id : 'S6',
      name: 'Boots',
      price: 49.99,
      rating : 4.3,
      quantity: 10,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/450814060/HB/RS/PI/4801568/4dbf4ebe-ec3a-4cc2-9f9c-5998c7fcefa0-500x500.jpg'
    },
    {
      id : 'S7',
      name: 'Oxfords',
      price: 39.99,
      rating : 4.0,
      quantity: 15,
      image: 'https://funkytradition.com/cdn/shop/files/5_Perimedes-Men-s-Tango-Latin-Dance-Shoes-male-Casual-Oxford-Leather-Wedding-sport-Shoes-Latin-Prom_c6e40c6f-57e0-4e1a-9278-02a9ed98f2a2.jpg?v=1723517488'
    }
  ]

  return (
    <Products products={products}/>
  )
}

export default Shoes;