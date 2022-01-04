import './App.css';
import decidr from './decidr.svg';
import { useState, useEffect } from 'react';
import AddItem from './Components/AddItem';
import DisplayList from './Components/DisplayList';
import GlobalActions from './Components/GlobalActions';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(
    () => {
      setListContainer(
        JSON.parse(
          window.localStorage.getItem("listContainer") || "[]"
        )
      );
    },
    []
  );

  const updateLocalStorage = (arr) => {
    window.localStorage.setItem("listContainer",JSON.stringify(arr));
    setListContainer(arr);
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
            setListContainer={updateLocalStorage}
          />
        }
      </main>
      <AddItem
        listContainer={listContainer}
        setListContainer={updateLocalStorage}
      />
      <footer>
        <GlobalActions
          listContainer={listContainer}
          setListContainer={updateLocalStorage}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </footer>
    </div>
  );
}

export default App;
