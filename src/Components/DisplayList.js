export default function DisplayList({ listContainer }) {

  const displayList = listContainer.map(
    (item, index) => (
      <li key={index}>{item}</li>
    )
  );

  return (
    <ol id="display-list">
      {displayList}
    </ol>
  )
}