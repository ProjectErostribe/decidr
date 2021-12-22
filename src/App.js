import './App.css';
import decidr from './decidr.svg';
import { useState } from 'react';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';
import GlobalActions from './Components/GlobalActions';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  
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
        <GlobalActions
          listContainer={listContainer}
          setListContainer={setListContainer}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </footer>
    </div>
  );
}

export default App;
