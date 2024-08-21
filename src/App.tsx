import './App.css';
import Counter from './Components/Counter';
import CounterContext from './Context/CounterContext';

function App() {
  return (
    <div className="App">
      <h1>Let's understand error handling</h1>
      <CounterContext>
      <Counter/>
      </CounterContext>
    </div>
  );
}

export default App;
