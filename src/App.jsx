function App() {

  const categories = [
    {
      name: 'Tees'
    },
    {
      name: 'Pants'
    },
    {
      name: 'Hats'
    },
    {
      name: 'Shoes'
    },
    {
      name: 'Shades'
    },
  ]

  return (
    <div className="categories-container">
      {
        categories.map((e) => (
          <div className="category-container">
            {/* <img /> */}
            <div className="category-body">
              <h1>{e.name}</h1>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
