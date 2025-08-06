import Products from "../../Components/Products/Products.component";

const Shades = () => {
const products = [
    {
      id : 'Sho1',
      name: 'Round',
      price: 9.99,
      rating : 4.0,
      image: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b1dfaf3300dc4c0aae493af18e03d710~tplv-dx0w9n1ysr-crop-webp:400:400.webp?dr=10517&t=555f072d&ps=933b5bde&shp=57fff0e0&shcp=0d52deaf&idc=useast5&from=1476391136'
    },
    {
      id : 'Sho2',
      name: 'Aviators',
      price: 14.99,
      rating : 4.8,
      image: 'https://www.randolphusa.com/cdn/shop/files/GunMetal-AtlanticBlue-CONCORDE_800x.jpg?v=1729863980'
    },
    {
      id : 'Sho3',
      name: 'Wayfarers',
      price: 16.99,
      rating : 4.3,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/436932856/DJ/XH/RU/121538924/wayfarers-sunglasses-frames-only-500x500.png'
    },
    {
      id : 'Sho4',
      name: 'Wrap',
      price: 19.99,
      rating : 4.2,
      image: 'https://images-static.nykaa.com/media/catalog/product/7/9/79169306802PMG5597_3.jpg?tr=w-500'
    },
    {
      id : 'Sho5',
      name: 'Clubmaster',
      price: 24.99,
      rating : 4.5,
      image: 'https://images.meesho.com/images/products/259717804/g3hbo_512.jpg'
    }
  ]

  return(
    <Products products={products}/>
  )
}

export default Shades;