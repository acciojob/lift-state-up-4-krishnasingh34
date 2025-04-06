import React from 'react'

const Child = ({name,price,updateItem,updatePrice})=> {

  const removeItem=(itemName,itemPrice)=>{
    let newItem = name.filter((item)=> item !== itemName)
    let newPrice = price.filter((price)=> price !== itemPrice)
    updateItem(newItem);
    updatePrice(newPrice);
  }
  return (
    <div className='child'>
      <h1>Child Component</h1>
      {name &&
        name.map((item,index) =>(
          <li>{item}-{price[index]}
          <button onClick={()=> removeItem(item,price[index])}>Remove</button>
        </li>
        ))
         
      }
    </div>
  )
}

export default Child