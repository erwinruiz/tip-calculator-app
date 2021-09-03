import Input from "../UI/Input";

function Bill() {
  return (
    <div>
      <h3>Bill</h3>
      <Input
        imgPath="./images/icon-dollar.svg"
        imgAlt="dollar icon"
        placeholder="0"
        type="number"
      />
    </div>
  );
}

export default Bill;
