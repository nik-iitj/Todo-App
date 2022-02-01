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





    return (
        <form>
        <input id='note' value={input} onChange={inputHandler} type="text" className="todo-input" />
        
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>    
        <span id="error"></span>
      </form>
      

    );


};

export default Form;