export default function DisplayList({ listContainer }) {

  const displayList = listContainer.slice(0).reverse().map(
    (option, index) => (
      <li key={index}>{option}</li>
    )
  );

  return (
    <div id="display-list">
      { listContainer.length > 0
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