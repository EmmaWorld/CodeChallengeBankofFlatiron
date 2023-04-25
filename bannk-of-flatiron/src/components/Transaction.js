// import React from "react";

// function Transaction({id, date, description, category, amount}) {
//   function handleDelete(id){
//     fetch(`http://localhost:8001/transactions/${id}`, {
//       method: 'DELETE'
//     })
//     .then(result => result.json())
//     .then(data => console.log(data))
    
//     // http://localhost:8001/transactions/1

//   }

import { useState, useEffect } from 'react';

function Transaction({id, date, description, category, amount}) {
  const [transactions, setTransactions] = useState([]);
function  fetchTrans(){
 fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
}
  useEffect(() => {
   fetchTrans()
  }, []);

  function handleDelete(id){
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Update transactions state variable after delete
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    });
    // console.log("afterDelete")
    fetchTrans()
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{<button onClick={()=> handleDelete(id)}>Delete</button>}</td>
    </tr>
  );
}

export default Transaction;