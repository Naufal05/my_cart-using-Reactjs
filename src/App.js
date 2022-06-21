import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone Pro Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redme Note",
      quantity: 10, 
    }
  ];
  return (
    <>
      <Navbar/>
      <main className='container mt-5'>
        <ProductList productList = {productList}/>

      </main>
      {/* <Footer/> */}
    </>
  )
}

export default App