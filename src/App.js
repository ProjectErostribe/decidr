import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';

function App() {
  const [listContainer, setListContainer] = useState([]);
  
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
      </main>
    </div>
  );
}

export default App;
