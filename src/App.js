import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import Completed_List from './components/Completed_List';

function App() {


  const [input,setInput] = useState("");
  const [todo,setTodo] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodo,setFileredTodo] = useState([]);
  const [completedList,setCompletedList] = useState([]);


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

  const removeHandler = ()=>{


    todo.forEach(function(element){

      if(element.completed===true){
        completedList.push(element);
      }

    })



    setTodo(todo.filter(ele=>ele.completed===false))


  };

  const saveLocalStorage = ()=>{


    localStorage.setItem("todos",JSON.stringify(todo));
    localStorage.setItem("completed",JSON.stringify(completedList));

  }

  const recoverData = ()=>{

    if(localStorage.getItem("todos")===null){
      
      localStorage.setItem("todos",JSON.stringify([]));
      localStorage.setItem("completed",JSON.stringify([]));
    } else {
      
      let data = JSON.parse(localStorage.getItem("todos"));
      let completed = JSON.parse(localStorage.getItem("completed"));
      setCompletedList(completed);
      setTodo(data);
    }

  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todo={todo} setTodo={setTodo} setInput={setInput} input={input} setStatus={setStatus} />
      <div className='List-view'>
        <div className='List1'>
          <h1>Current</h1>
          <List todo = {todo} setTodo={setTodo} filteredTodo={filteredTodo}/>
          <button onClick={removeHandler}>Remove Completed Task </button>
        </div>
        <div className='List2'>
          <h1>Completed</h1>
          <Completed_List completedList={completedList} setCompletedList = {setCompletedList}/>
        </div>
        

      </div>

      
    </div>
  );
}

export default App;
