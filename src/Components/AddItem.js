export default function AddItem({ listContainer, setListContainer }) {

  return (
    <div id="additem">
      <input type="text" id="itemtext" placeholder="Add an item" value={newItem} onInput={e => setNewItem(e.target.value)} />
      <button type="submit" onClick={onSubmit}>Add Item</button>
    </div>
  );
}