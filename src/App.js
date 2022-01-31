import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {


  const [input,setInput] = useState("");
  const [todo,setTodo] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodo,setFileredTodo] = useState([]);



  useEffect(()=>{
    recoverData();
  },[]);

  useEffect(()=>{

    filterHandler();
    saveLocalStorage();

  },[todo, status]);

  const filterHandler = ()=>{

    switch(status){
      case 'completed':
        setFileredTodo(todo.filter(ele=>ele.completed===true));
        break;
      
      case 'uncompleted':
        setFileredTodo(todo.filter(ele=>ele.completed===false));
        break;
      
      default:
        setFileredTodo(todo);
        break;
        

    }

  }

  const saveLocalStorage = ()=>{


    localStorage.setItem("todos",JSON.stringify(todo));
    

  }

  const recoverData = ()=>{

    if(localStorage.getItem("todos")===null){
      
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
      
      let data = JSON.parse(localStorage.getItem("todos"));
      console.log(data);
      setTodo(data);
    }

  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todo={todo} setTodo={setTodo} setInput={setInput} input={input} setStatus={setStatus} />
      <List todo = {todo} setTodo={setTodo} filteredTodo={filteredTodo}/>
    </div>
  );
}

export default App;
