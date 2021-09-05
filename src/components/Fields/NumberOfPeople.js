import Input from "../UI/Input";

function NumberOfPeople(props) {
  const changeNumberOfPeopleHandler = (e) => {
    props.onAddNumberOfPeople(e.target.value);
  };

  return (
    <div>
      <h3>Number of People</h3>
      <Input
        imgPath="./images/icon-person.svg"
        imgAlt="person icon"
        placeholder="0"
        type="number"
        onChange={changeNumberOfPeopleHandler}
      />
    </div>
  );
}

export default NumberOfPeople;
