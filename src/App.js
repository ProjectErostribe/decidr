import './App.css';
import { useState } from 'react';
import AddItem from './Components/AddItem';

function App() {
  const [listContainer, setListContainer] = useState([]);

  console.log('List Container',listContainer);
  
  return (
    <div className="App">
      <header>
        Decider
      </header>
      <AddItem
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
    </div>
  );
}

export default App;
