import React from 'react';



const Form = ({setInput, todo, setTodo,input, setStatus}) =>{



    const inputHandler = (e)=> {

        if(input.length>=4){
          var error = document.getElementById("error");
          error.textContent="";

        }

        setInput(e.target.value);
    }

    const submitHandler = (e)=>{
        
        e.preventDefault();


        var error = document.getElementById("error");
        var data = document.getElementById("note").value;
        if (data.length<5) 
        {
              
            // Changing content and color of content
            error.textContent = "Please enter a the task name \nwith more than 4 characters"
            error.style.color = "red"
        } else {
            error.textContent = ""
            setTodo([
              ...todo, {text: input, completed: false, id: Math.random()*1000},
          ])
  
          setInput("");

        }



    };

    const statusHandler = (e)=>{
      setStatus(e.target.value);

    };

    const CheckError = ()=>{

      if(input.length<=5){

        return (
          <h1>ddsss</h1>
        );        

      } else {
        return (
          <h1>correct</h1>
        )
      }

    }



    return (
        <form>
        <input id='note' value={input} onChange={inputHandler} type="text" className="todo-input" />
        
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        
    
        <span id="error"></span>
      </form>
      

    );


};

export default Form;