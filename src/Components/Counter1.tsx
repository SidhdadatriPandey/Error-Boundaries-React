import React, { useContext } from 'react'
import { UserContext } from '../Context/CounterContext'


const Counter1 = () => {
    const {count1,setCount1}=useContext(UserContext);  
        if(count1>4){
            throw new Error("too many counts....");
        }
  return (
    <div>
      <h3>Value of count1 is</h3>
      <div>{count1}</div>
      <button onClick={()=>setCount1(count1+1)}>Increase</button>
    </div>
  )
}

export default Counter1
