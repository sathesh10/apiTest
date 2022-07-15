import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounters, updateCounters } from './app/actions';

function App(props) {
  const [inputAmount, setInputAmount] = useState({
    id: null,
    amount: 0,
  });
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function(){
      dispatch(getCounters())
    })();
  },[])

  useEffect(() => {
    if(counter.updateSuccess){
      dispatch(getCounters())
    }
  },[counter])

  const updateAmount = () => {
    const data = {
      id: inputAmount.id,
      amount: inputAmount.amount
    }
    dispatch(updateCounters(data))
  }
  return (
    <div>
      {counter?.users && counter?.users?.length > 0 && 
      counter?.users.map(item => (
        <p>Name: {item.name}, My Total amount {item.amount}</p>
      ))}
      <input type="text" name='id' value={inputAmount.id} onChange={data => setInputAmount({...inputAmount, id: data.target.value})}/>
      <input type="text" name='amount' value={inputAmount.amount} onChange={data => setInputAmount({...inputAmount, amount: data.target.value})}/>
      <button onClick={() => updateAmount()}>Buy</button>
    </div>
  );
}

export default App;