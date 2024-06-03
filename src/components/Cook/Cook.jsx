

const Cook = ({cook}) => {
    console.log(cook)
    const {title,time,calories}=cook ;
    return (
        <div className="flex justify-between">
            <h4>{title}</h4>
            <h4>{time} minutes</h4>
            <h4>{calories} calories</h4>
            <button className="bg-red-300">preparing</button>
        </div>
    );
};

export default Cook;