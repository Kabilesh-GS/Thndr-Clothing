import CategoryNavigation from "../../Components/Navigation/CategoryNavigation.component.jsx"

function Home() {

  const categories = [
    {
      id : 1,
      name: 'Tees',
      Imageurl : 'https://i.pinimg.com/736x/1a/47/11/1a4711e40aa70ba90be9ce6322afe236.jpg',
      redirect : '/tees'
    },
    {
      id : 2,
      name: 'Pants',
      Imageurl : 'https://i.pinimg.com/736x/6d/2a/49/6d2a49433cbdc7197028953eb910c06c.jpg',
      redirect : '/pants'
    },
    {
      id : 3,
      name: 'Hats',
      Imageurl : 'https://i.pinimg.com/736x/d4/70/32/d47032c62e93f8abb0f2ad4f08965fce.jpg',
      redirect : '/hats'
    },
    {
      id : 4,
      name: 'Shoes',
      Imageurl : 'https://i.pinimg.com/736x/c7/a3/76/c7a376b150010e9c02a2986603671149.jpg',
      redirect : '/shoes'
    },
    {
      id : 5,
      name: 'Shades',
      Imageurl : 'https://i.pinimg.com/736x/f7/b9/df/f7b9df384022b8a1363b3dee0d0d5d30.jpg',
      redirect : '/shades'      
    }
  ]

  return (
    <CategoryNavigation categories={categories} />
  )
}

export default Home
