import Ingredient from "../Ingredient/Ingredient";


const Ingredients = ({ingredients}) => {
    
    return (
        <div>
            
           {
            ingredients.map(ingredient=><Ingredient ingredient={ingredient}></Ingredient>)
           } 
          
        </div>
    );
};

export default Ingredients;