import classes from "./Tip.module.css";
import Button from "../../UI/Button";

function Tip(props) {
  const { value, isActive } = props;

  const selectTipHandler = (e) => {
    e.preventDefault();
    props.onAddTip(value);
  };

  return (
    <Button
      className={`${classes.button} ${isActive && classes.buttonActive}`}
      onClick={selectTipHandler}
    >
      {value}%
    </Button>
  );
}

export default Tip;
