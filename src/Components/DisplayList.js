export default function DisplayList({ listContainer, setListContainer }) {

  let listCount = listContainer.length;

  const deleteOption = (event) => {
    setListContainer(listContainer.filter(item => item !== event.target.dataset.option));
  }

  const displayList = listContainer.slice(0).reverse().map(
    (option, index) => (
      <li key={index}>
        <span>{listCount--}.</span>
        <span>{option}</span>
        <button data-option={option} onClick={deleteOption}>🗑️</button>
      </li>
    )
  );

  return (
    <div id="display-list">
      { listCount
        ? <p>{listContainer.length} Options</p>
        : <p>I can help you decide.<br />
          Add options to your list.</p>
      }
      <ol reversed>
        {displayList}
      </ol>
    </div>
  )
}