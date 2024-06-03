import Ingredients from "../Ingredients/Ingredients";
import { CiAlarmOn } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";


const Recipe = ({recipe,handleAddToCart}) => {
    const { id,img,title,description,ingredients,time,calories}=recipe ;
    // console.log(recipe)

    return (
        <div  >
           <h1>id : {id}</h1>
           <img src={img} alt="" />
           <h1>{title}</h1>
           <p>{description}</p>
           
           <h3> ingredients : {ingredients.length}</h3>
           <Ingredients ingredients={ingredients}></Ingredients>

           <div className="flex justify-between">
               <div className="flex  items-center ">
                     <p><CiAlarmOn /></p>
                     <h4>{time} minutes</h4>
               </div>
               <div className="flex  items-center ">
                <RiFireLine />
                <h4>{calories} calories</h4>
               </div>
           </div>

           <button className="bg-slate-400" onClick={()=>handleAddToCart(recipe)}> want to cook</button>

        </div>
    );
};

export default Recipe;