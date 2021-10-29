// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
          <h2>Today's Listing</h2>
      </header>

      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
