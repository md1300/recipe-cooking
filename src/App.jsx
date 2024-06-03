
import { useState } from 'react'
import './App.css'
import Cooked from './components/Cooked/Cooked'
import Recipes from './components/Recipes/Recipes'



function App() {

  const [addToCart,setAddToCart]=useState([])
  const handleAddToCart=id=>{
    
    const newAddToCart=[...addToCart,id]
    console.log(newAddToCart)
    setAddToCart(newAddToCart);
    
  }
  

  return (
    <>
      <h1 className='text-7xl text-slate-950 text-center'>React</h1>
      <div className='flex space-x-14'>
          <Recipes handleAddToCart={handleAddToCart}></Recipes>
          <Cooked addToCart={addToCart}></Cooked>
      </div>
     

    </>
  )
}

export default App
