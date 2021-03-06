import Input from "../UI/Input";

function Bill(props) {
  const { bill } = props;
  const changeBillHandler = (e) => {
    props.onAddBill(e.target.value);
  };

  return (
    <div>
      <h3>Bill</h3>
      <Input
        imgPath="./images/icon-dollar.svg"
        imgAlt="dollar icon"
        placeholder="0"
        type="number"
        onChange={changeBillHandler}
        value={bill}
      />
    </div>
  );
}

export default Bill;
