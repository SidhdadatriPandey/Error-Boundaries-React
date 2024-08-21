import React, { useContext } from 'react'
import { UserContext } from '../Context/CounterContext'

const Counter2 = () => {
    const {count2,setCount2}=useContext(UserContext);
  return (
    <div>
      <h3>Value of counter2 is</h3>
      <div>{count2}</div>
      <button onClick={()=>setCount2(count2+1)}>Increase</button>
    </div>
  )
}

export default Counter2
