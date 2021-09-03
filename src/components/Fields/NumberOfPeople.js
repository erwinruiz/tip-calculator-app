import Input from "../UI/Input";

function NumberOfPeople() {
  return (
    <div>
      <h3>Number of People</h3>
      <Input
        imgPath="./images/icon-person.svg"
        imgAlt="person icon"
        placeholder="0"
        type="number"
      />
    </div>
  );
}

export default NumberOfPeople;
