export default function DisplayList({ listContainer }) {

  const displayList = listContainer.map(
    (item, index) => (
      <li key={index}>{item}</li>
    )
  );

  return (
    <div id="display-list">
      { listContainer.length > 0
        ? <p>{listContainer.length} Options</p>
        : <p>I can help you decide.<br />
          Add options to your list.</p>
      }
      <ol>
        {displayList}
      </ol>
    </div>
  )
}