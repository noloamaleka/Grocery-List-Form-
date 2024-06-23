import React, { useState } from 'react';
import GroceryForm from './Components/GroceryForm';
import GroceryList from './Components/GroceryList';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState([]);

  const handleItem = (newItem) => {
    setGroceries([...groceries, newItem]);
  };

  return (
    <div>
      <h1 className="title" >Grocery Shopping Items</h1>
      <GroceryForm onSubmit={handleItem} />
      <GroceryList items={groceries} />
    </div>
  );
}

export default App;

