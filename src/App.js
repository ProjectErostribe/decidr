import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';
import SelectItem from './Components/SelectItem';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');


  return (
    <div id="decidr">
      <main>
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
      </main>
    </div>
  );
}

export default App;
