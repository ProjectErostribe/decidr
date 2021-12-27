import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
  const [newItem, setNewItem] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    if( isBlank(newItem) ) return setNewItem('');
    setListContainer([...listContainer, newItem.trim()]);
    setNewItem('');
  }

  const isBlank = (option) => {
    if(option.trim() === '') {
      document.getElementById('newOption').classList.add("invalid");
      document.getElementById('newOption').placeholder = 'Option must not be blank';
      return true;
    }
    document.getElementById('newOption').classList.remove("invalid");
    document.getElementById('newOption').placeholder = 'Add an option';
    return false;
  }

  const checkNewItem = (event) => {
    setNewItem(event.target.value);
    isBlank(event.target.value.trim());
  }

  return (
    <form id="add-option" onSubmit={formSubmit}>
      <input
        id="newOption"
        className=""
        value={newItem}
        onInput={event => checkNewItem(event)}
        placeholder="Add an option"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  )
}