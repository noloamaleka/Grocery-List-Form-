import React from 'react';
import './GroceryList.css';

const GroceryList = ({ items }) => {
  return (
    <div className="list-container">
    <div className="list-section">
    <h2>Meat</h2>
    <ul>
     {items.filter(item => item.category === 'meat').map((item, index) => (
    <li key={index}>{item.itemName}</li>
        ))}
    </ul>
    </div>

    <div className="list-section">
    <h2>Vegetables</h2>
    <ul>
     {items.filter(item => item.category === 'vegetables').map((item, index) => (
    <li key={index}>{item.itemName}</li>
          ))}
    </ul>
    </div>

    <div className="list-section">
    <h2>Other</h2>
    <ul>
     {items.filter(item => item.category === 'other').map((item, index) => (
    <li key={index}>{item.itemName}</li>
          ))}
    </ul>
    </div>
    </div>
  );
};

export default GroceryList;
