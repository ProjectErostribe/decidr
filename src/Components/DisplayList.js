export default function DisplayList({ listContainer }) {

  const displayList = listContainer.map(
    (item, index) => (
      <li key={index}>{item}</li>
    )
  );

  return (
    <div id="display-list">
      { listContainer.length > 0
        ? <p>Options: {listContainer.length}</p>
        : <p>Add at least 2 options</p>
      }
      <ol>
        {displayList}
      </ol>
    </div>
  )
}