import classes from "./Tip.module.css";
import Button from "../../UI/Button";

function Tip(props) {
  const { value } = props;

  const selectTipHandler = (e) => {
    e.preventDefault();
    props.onAddTip(value);
  };

  return (
    <Button className={classes.button} onClick={selectTipHandler}>
      {value}%
    </Button>
  );
}

export default Tip;
