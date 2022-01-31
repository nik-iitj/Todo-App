import React  from "react";
import Todo from "./Todo";

const List = ({todo,setTodo, filteredTodo}) =>{

   

    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodo.map(element => (
                <Todo key={element.id} text={element.text} todo = {todo} setTodo={setTodo} element={element}/>
            ))}
        </ul>
      </div>

    );



};

export default List;