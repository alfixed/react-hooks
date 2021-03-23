import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Remove</button>
    </div>
  );
}

export default App;
