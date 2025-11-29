import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const titleRef = useRef();
  const descRef = useRef();
  
  function addTodo(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;

    if (!title || !description) {
      alert("please enter the title and description");
      return;
    }

    todo.push({ title: title, description: description });
    setTodo([...todo]);
    
    titleRef.current.value = "";
    descRef.current.value = "";
  }

 const deleteTodo = (index) => {
  todo.splice(index , 1);
  setTodo([...todo])
  console.log("Deleted todo");
  };

  
  const editTodo = (index) => {
    let newTitle = prompt("Edit title");
    let newDesc = prompt("Edit description");
    todo.splice(index, 1 ,{ title: newTitle, description: newDesc });
    setTodo([...todo])
    console.log("Edit todo");

  };

  return (
    <div className="wrapper">
      <h1 className="title">React Todo App</h1>

      <section className="container">
        <form onSubmit={addTodo} className="form-box">
          <input
            type="text"
            placeholder="Enter Title..."
            className="input-field"
            ref={titleRef}/>
          <textarea
            placeholder="Enter Description..."
            className="input-area"
            ref={descRef}
          ></textarea>
          <button className="btn add-btn" type="submit">
            Add
          </button>
        </form>
        <div className="todo-list">
          {todo.map((item, index) => (
            <div key={index} className="todo-card">
              <div className="text-box">
                <h1 className="todo-heading">{item.title}</h1>
                <h2 className="todo-sub">{item.description}</h2>
              </div>

              <div className="action-buttons">
                <button className="btn edit" onClick={() => editTodo(index)}>
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
