import React, {useState, useCallback} from 'react';
import ItemsList from './ItemsList';

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);
  const styles = {
    color: colored ? 'darkred' : 'blue'
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Amount of elements: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Edit</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
