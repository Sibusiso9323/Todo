import React from "react";
import "./style.css";

 function App() {
  const [todo,setTodo] = React.useState("")
     
  const [todoList, setList] = React.useState([])

  function onSubmitHandler(e){
    e.preventDefault()
    //console.log(todo);

    const addTodo ={
      id :new Date().getTime(),
      todoName: todo,
      complete: false
    }

    setList([...todoList].concat(addTodo))
     setTodo("")
    console.log(todoList);
  }

  function deleteTodo(id){
    let updatedList = [...todoList].filter((todo) => todo.id !== id )
    setList(updatedList)
  }

  function completeTodo(id){
    let updatedList = [...todoList].map((todo)=>{
      if (todo.id ===id){
        todo.complete = !todo.complete
      }
      return todo
    })
    setList(updatedList)
    console.log(todoList );

  }



  return (
    <div className="todo" >
      <h1>To Do</h1>

      <form onSubmit={onSubmitHandler}>
      <input 
      type="text"
      value={todo}
      onChange ={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
      </form>

      {todoList.map((data) =>(
         <div key={data.id} className="list-style">
          
         
        <div className="button-style">
          <div className="todo-style">
        {data.todoName}
        </div>
          <button onClick={() => deleteTodo(data.id)}>Delete</button>
          {
            data.complete === true
            ? <button className="complete" onClick={() => completeTodo(data.id)}>Completed</button>
            : <button onClick={() => completeTodo(data.id)}>Complete</button>
          }
          
         </div>

       
         </div>
   ) )}
     
    </div> 
  );
}
export default App;