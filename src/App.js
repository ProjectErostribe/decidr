import './App.css';
import decidr from './decidr.svg';
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

  const clearSelection = () => {
    setSelectedItem('');
  }
  
  const restart = () => {
    clearSelection();
    setListContainer([]);
  }
  
  return (
    <div className="App">
      <header>
        <img src={decidr} alt="" className='logo' />
        Decider
      </header>
      <main>
        {selectedItem.length > 0
          ? <p id="selected">{selectedItem}</p>
          : <DisplayList
            listContainer={listContainer}
          />
        }
      </main>
      <AddItem
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
      <footer>
        {selectedItem.length > 0
          ? <>
            <button onClick={clearSelection}>Clear Selection</button>
            <button onClick={selectItem}>Select Again</button>
          </>
          : <button onClick={selectItem}>Select An Item</button>
        }
        <button onClick={restart}>Restart</button>
      </footer>
    </div>
  );
}

export default App;
