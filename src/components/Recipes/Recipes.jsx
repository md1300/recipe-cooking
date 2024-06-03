import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleAddToCart}) => {
    const [recipes,setRecipes]=useState([])
    
  

    useEffect(()=>{
        fetch('recipeImage.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
  
    
    
    return (
        <div className="w-2/3 " >
               <h1>Total recipes : {recipes.length}</h1>
            <div className="grid grid-cols-2 space-x-12 -space-y-12">
               {
                   recipes.map(recipe=><Recipe recipe={recipe}
                    handleAddToCart={handleAddToCart}
                   ></Recipe>)
               }
            </div>

           
            
            
        </div>
    );
};

export default Recipes;