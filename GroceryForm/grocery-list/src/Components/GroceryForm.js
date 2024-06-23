import React, { useState } from 'react';
import './GroceryForm.css'; 

const GroceryForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('meat');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, category });
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter grocery item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="meat">Meat</option>
        <option value="vegetables">Vegetables</option>
        <option value="other">Other</option>
      </select>
      <button className = "button-add "type="submit">Add Item</button>
    </form>
  );
};

export default GroceryForm;
