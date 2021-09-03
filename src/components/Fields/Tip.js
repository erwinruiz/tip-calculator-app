import classes from "./Tip.module.css";

function Tip(props) {
  const { value } = props;

  const selectTipHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <button className={classes.button} onClick={selectTipHandler}>
      {value}%
    </button>
  );
}

export default Tip;
