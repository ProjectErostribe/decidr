export default function GlobalActions({ selectedItem, setSelectedItem, listContainer, setListContainer }) {

  const selectOption = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer.length > 0 ? listContainer[random] : '' );
  }

  const clearSelection = () => {
    setSelectedItem('');
  }

  const restart = () => {
    clearSelection();
    setListContainer([]);
  }

  return (
    <>
      {selectedItem.length > 0
        ? <>
          <button onClick={clearSelection}>Clear Selection</button>
          <button onClick={selectOption}>Select Again</button>
            <button onClick={restart}>Restart</button>
        </>
        : <>
        { listContainer.length > 1
          ?
          <>
            <button onClick={selectOption}>Select An Option</button>
            <button onClick={restart}>Restart</button>
          </>
          : <button disabled>Add at least 2 options</button>
        }
        </>
      }
    </>
  )
}