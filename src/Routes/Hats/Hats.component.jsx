import Products from "../../Components/Products/Products.component";

const Hats = () => {
    const products = [
    {
      id : 'H1',
      name: 'Baseball Cap',
      price: 5.99,
      quantity: 15,
      rating : 4.1,
      image: 'https://www.themadhatters.in/cdn/shop/products/EH3A7070.jpg?v=1633011204'
    },
    {
      id : 'H2',
      name: 'Fez',
      price: 9.99,
      quantity: 12,
      rating : 4.8,
      image: 'https://i.etsystatic.com/28953848/r/il/7bfe36/4096192488/il_570xN.4096192488_qrwj.jpg'
    },
    {
      id : 'H3',
      name: 'Beanie',
      price: 3.99,
      rating : 4.0,
      quantity: 14,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0KnW8jgURAUaJCx_FS7z0MKx9AvOX6s1YQ&s'
    },
    {
      id : 'H4',
      name: 'Visor',
      price: 12.99,
      rating : 4.6,
      quantity: 17,
      image: 'https://www.coolibar.com/cdn/shop/files/10932-111-1000-03_34f67e5f-9611-493c-9bde-0a328f400c2e.jpg?v=1739896646&width=720'
    },
    {
      id : 'H5',
      name: 'Cowboy Hat',
      price: 10.99,
      quantity: 57,
      rating : 4.7,
      image: 'https://www.hatcountry.com/cdn/shop/files/CowboyMobileF_14c60454-8307-48a7-900b-d73ff2eec26a.webp?v=1727446620&width=862'
    },
    {
      id : 'H6',
      name: 'Beret',
      price: 29.99,
      quantity: 3,
      rating : 4.0,
      image: 'https://i.etsystatic.com/23172465/r/il/99e7e4/2758814249/il_570xN.2758814249_kigw.jpg'
    },
    {
      id : 'H7',
      name: 'Fedora',
      price: 14.99,
      quantity: 20,
      rating : 4.5,
      image: 'https://stylishlyme.com/wp-content/uploads/2014/11/Fall-green-hat-and-navy-sweater.jpg'
    }
  ]

  return (
    <Products products={products} />
  )
}

export default Hats; 