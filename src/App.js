import './App.css';
import { useState } from 'react';
import AddItem from './Components/AddItem';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer[random] );
  }
  
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
