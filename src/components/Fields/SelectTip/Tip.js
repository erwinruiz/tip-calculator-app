// import classes from "./Tip.module.css";
import Button from "../../UI/Button";

function Tip(props) {
  const { value } = props;

  const selectTipHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <Button onClick={selectTipHandler}>
      {value}%
    </Button>
  );
}

export default Tip;
