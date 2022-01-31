import React from "react";

const Todo = ({text,todo,setTodo,element})=>{
    
    const deleteHandler = () =>{

        setTodo(todo.filter(el=> el.id !==element.id))
  
    };

    const completeHandler = () =>{

        setTodo(todo.map((ele)=>{

            if(ele.id===element.id){
                return {
                    ...ele,completed: !ele.completed
                };
            }

            return ele;

        }))

    }

    return (
        
        <div className="todo">
            <li className={`todo-item ${element.completed ? "completed" : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    )

};

export default Todo;