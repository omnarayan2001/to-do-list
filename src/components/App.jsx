import React , { useState }from "react";
import ToDoItem from "./ToDoItem";
function App() {
  var inputText;
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    inputText = event.target.value;
    setText(inputText);
  }
  function addItem() {
    setItems((prevValue) =>{
      return [...prevValue, text];
    });
    setText("");
  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value= {text} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=> (
            <ToDoItem text={item} />))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
