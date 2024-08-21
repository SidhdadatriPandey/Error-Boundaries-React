import React from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import ErrorBoundary from './ErrorBoundary'

const Counter = () => {
  return (
   <div>
    <ErrorBoundary>
        <Counter1/>
    </ErrorBoundary>   
    <Counter2/>
   </div>
  )
}

export default Counter
