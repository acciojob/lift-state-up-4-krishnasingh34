
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";
const App = () => {
  const [name,setName] = useState([]);
  const [price,setPrice] = useState([]);

  const addItem = ()=>{
    let inpName=document.getElementById('itemName').value;
    let inpPrice=document.getElementById('itemPrice').value;
    setName([...name,inpName]);
    setPrice([...price,inpPrice]);
  }
  const updateItem = (newItem)=>{
    setName(newItem);
  }
  const updatePrice = (newPrice)=>{
    setPrice(newPrice);
  }

  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <label>Item Name</label>
      <input type="text" id="itemName" />
      <label>Item Price</label>
      <input type="text" id="itemPrice" />
      <button onClick={addItem}>Add Item</button>
        <Child name={name} price={price} updateItem={updateItem} updatePrice={updatePrice}/>
    </div>
  )
}
export default App
