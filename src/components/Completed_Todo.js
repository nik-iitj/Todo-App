import React from "react";


const Completed_Todo = ({element,text,setCompletedList, completedList}) =>{

    const deleteHandler = () =>{

        setCompletedList(completedList.filter(el=> el.id !==element.id))
  
    };

    return (

        <div className="todo">
            <li  className="todo-item" >
                {text}
            </li>
            <button onClick={deleteHandler}  className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )


}


export default Completed_Todo;

