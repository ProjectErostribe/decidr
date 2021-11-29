import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
  const [newItem, setNewItem] = useState('');

  const onSubmit = () => {
    setListContainer([...listContainer, newItem]);
    setNewItem('');
  }

  return (
    <div id="additem">
      <input type="text" id="itemtext" placeholder="Add an item" value={newItem} onInput={e => setNewItem(e.target.value)} />
      <button type="submit" onClick={onSubmit}>Add Item</button>
    </div>
  );
}