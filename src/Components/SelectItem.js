import Random from "../utils/Random";

export default function SelectItem({ listContainer, setSelectedItem }) {

  const selectRandomItem = () => {
    const randomIndex = Random.getRandomNumber(listContainer.length);
    const randomItem = listContainer[randomIndex];
    setSelectedItem(randomItem);
  }

  return (
    <button onClick={selectRandomItem}>Select Item</button>
  );
}