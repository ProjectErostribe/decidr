import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';

function App() {
  const [listContainer, setListContainer] = useState([]);
  
  return (
    <div id="decidr">
      <main>
        <AddItem
          listContainer={listContainer}
          setListContainer={setListContainer}
        />
      </main>
    </div>
  );
}

export default App;
