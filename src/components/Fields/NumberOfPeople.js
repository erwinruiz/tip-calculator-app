import Input from "../UI/Input";

function NumberOfPeople(props) {
  const { numberOfPeople } = props;
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
        value={numberOfPeople}
      />
    </div>
  );
}

export default NumberOfPeople;
