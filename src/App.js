import './App.css';
import { useState } from 'react';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer.length > 0 ? listContainer[random] : '' );
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
      {selectedItem.length > 0
        ? <p>{selectedItem}</p>
        : <DisplayList
          listContainer={listContainer}
        />
      }
      <button onClick={selectItem}>Select An Item</button>
    </div>
  );
}

export default App;
