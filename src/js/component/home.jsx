import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="main-frame">
      <div className="title">
        <h1>To-Do List</h1>
      </div>
      
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <ul>
        {todos.map((todo, index) => (
          <>
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>X</button>
          </li>
          <hr></hr>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;