import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function del(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, idx) => (
            <Todo 
            key = {idx}
            text={todoItem} 
            id={idx} 
            method={del} 
             />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
