import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
  const [newItem, setNewItem] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    setListContainer([...listContainer, newItem]);
    setNewItem('');
  }

  return (
    <form id="add-option">
      <input
        value={newItem}
        onInput={event => setNewItem(event.target.value)}
        placeholder="Add an option"
      />
      <button type="submit" onClick={formSubmit}>Add Item</button>
    </form>
  )
}