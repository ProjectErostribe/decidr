import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
  const [newItem, setNewItem] = useState('');
  const [isValid, setIsValid] = useState('');
  const [placeholder, setPlaceholder] = useState('Add an option');

  const formSubmit = (event) => {
    event.preventDefault();
    if( isBlank(newItem.trim()) ) return setNewItem('');
    if( isDuplicate(newItem.trim()) ) return setNewItem('');
    setListContainer([...listContainer, newItem.trim()]);
    setNewItem('');
  }

  const isBlank = (option) => {
    if(option === '') {
      isInvalid(true,'Option must not be blank');;
      return true;
    }
    isInvalid(false);
    return false;
  }

  const isDuplicate = (option) => {
    const inArray = listContainer.find(item => {
      return item.toLowerCase() === option.toLowerCase();
    });
    if(inArray !== undefined){
      isInvalid(true,'Option already in list');
      return true;
    }
    isInvalid(false);
    return false;
  }

  const isInvalid = (bool, errorMessage) => {
    console.log('Invalid:',bool,errorMessage);
    if(bool){
      setIsValid("invalid");
      setPlaceholder(errorMessage);
      return
    }
    setIsValid("");
    setPlaceholder('Add an option');
  }

  const checkNewItem = (event) => {
    setNewItem(event.target.value);
    isBlank(event.target.value.trim());
  }

  return (
    <form id="add-option" onSubmit={formSubmit}>
      <input
        id="newOption"
        className={isValid}
        value={newItem}
        onInput={event => checkNewItem(event)}
        placeholder={placeholder}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  )
}