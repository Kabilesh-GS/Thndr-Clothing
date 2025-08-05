import Products from "../../Components/Products/Products.component";

const Shoes = () => {
  const products = [
    {
      id : 1,
      name: 'Sneakers',
      price: 14.99,
      rating : 4.1,
      image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/8/j/h/-original-imah25hqujuqvhwy.jpeg?q=90&crop=false'
    },
    {
      id : 2,
      name: 'Loafers',
      price: 19.99,
      rating : 4.6,
      image: 'https://sparrods.com/cdn/shop/articles/Albert_tassel_loafer_in_espresso_worn_without_socks_2000x.jpg?v=1739914069'
    },
    {
      id : 3,
      name: 'High Heels',
      price: 25.99,
      rating : 4.0,
      image: 'https://i.etsystatic.com/25449844/r/il/2a036c/4176531689/il_570xN.4176531689_5fxd.jpg'
    },
    {
      id : 4,
      name: 'Hiking Boots',
      price: 29.99,
      rating : 4.3,
      image: 'https://www.fjern.equipment/cdn/shop/files/fjern-womens-sokande-hiking-boots-sandstone-14_2048x.jpg?v=1728658916'
    },
    {
      id : 5,
      name: 'Crocs',
      price: 9.99,
      rating : 4.7,
      image: 'https://images.meesho.com/images/products/380664375/k1dmv_512.webp?width=512'
    }
  ]

  return (
    <Products products={products}/>
  )
}

export default Shoes;