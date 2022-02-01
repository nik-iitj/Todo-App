import React from "react";
import Completed_Todo from "./Completed_Todo";



const Completed_List = ({completedList,setCompletedList}) =>{


    return (

        <div className="todo-container-complete">
        <ul className="todo-list">
        {completedList.map(element => (
                <Completed_Todo element={element} text = {element.text} setCompletedList={setCompletedList} completedList={completedList}/>
            ))}
        </ul>
      </div>

    )



};

export default Completed_List;

