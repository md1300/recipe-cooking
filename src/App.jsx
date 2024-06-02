
import './App.css'
import Cooked from './components/Cooked/Cooked'
import Recipes from './components/Recipes/Recipes'



function App() {
  

  return (
    <>
      <h1 className='text-7xl text-slate-950 text-center'>React</h1>
      <div className='flex space-x-14'>
          <Recipes></Recipes>
          <Cooked></Cooked>
      </div>
     

    </>
  )
}

export default App
