import Cook from "../Cook/Cook";


const Cooked = ({addToCart}) => {
         
    return (
        <div className="w-1/3">
           <div>
           <h1>want to cook :{addToCart.length}</h1>
           </div>
           <div className="flex justify-between">
               <h4>name</h4>
               <h4>time</h4>
               <h4>calories</h4>
           </div>
           {
            addToCart.map(cook=><Cook cook={cook}></Cook>)
           }
        </div>
    );
};

export default Cooked;