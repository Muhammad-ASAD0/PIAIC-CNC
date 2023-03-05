import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState([]);
  
  const renderLi = () => {
    let listItem = [];
    let i = 0;

    list.forEach((value, index) => {
      listItem.push(
        <li key={"list-" + index}>{value}
          <button style={{float:"right"}} onClick={() => editTodo(index)}>edit</button>
          <button style={{float:"right"}} onClick={() => removeTodo(index)}>remove</button>
        </li>
      );

      if (i > 1) i = 0;
      else i++;
    });

    return listItem;
  };

  const addTodo = () => {
    const currentList = [...list];
    currentList.push(text);
    setList(currentList);
    setText("");
  };

  const editTodo = (index) => {
    setText(list[index]);
    setEditIndex(index);
  };

  const updateTodo = () => {
    const currentList = [...list];
    currentList[editIndex] = text;
    setList(currentList);
    setText("");
    setEditIndex(null);
  };

  const removeTodo = (index) => {
    const currentList = [...list];
    currentList.splice(index, 1);
    setList(currentList);
  };
  
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <br />
      <input onChange={(event) => setText(event.target.value)} type="text" value={text} />
      {(editIndex === null) ? <button onClick={addTodo}>Add</button> : <button onClick={updateTodo}>Update</button>}
      <ul>
        {renderLi()}
      </ul>
    </div>
  );
}

export default App;