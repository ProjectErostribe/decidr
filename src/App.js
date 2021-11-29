import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';
import SelectItem from './Components/SelectItem';
import ShowSelectedItem from './Components/ShowSelectedItem';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');


  return (
    <div id="decidr">
      <main>
      {selectedItem.length === 0
        ? <div>
          <AddItem
            listContainer={listContainer}
            setListContainer={setListContainer}
          />
          <DisplayList
            listContainer={listContainer}
          />
          <SelectItem
            listContainer={listContainer}
            setSelectedItem={setSelectedItem}
          />
        </div>
        : <div>
          <ShowSelectedItem
            selectedItem={selectedItem}
          />
          <SelectItem
            listContainer={listContainer}
            setSelectedItem={setSelectedItem}
          />
        </div>
      }
      </main>
    </div>
  );
}

export default App;
