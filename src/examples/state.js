import React, {useState} from 'react';

function computeInitialCounter() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  });
 
  function increment() {
    setCounter(prev => prev + 1);
  }

  function decrement() {
    setCounter(prev => prev - 1);
  }

  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'New counter'
      }
    });
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Remove</button>
      <button onClick={updateTitle} className="btn btn-default">Edit name</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
