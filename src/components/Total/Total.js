import classes from "./Total.module.css";
import Button from "../UI/Button";

function Total(props) {
  const { tipAmount, total } = props.result;

  const resetHandler = () => {
    props.onResetFields();
  };
  return (
    <div className={classes.container}>
      <div className={classes.sections}>
        <div className={classes.section}>
          <div>
            <h3>
              Tip Amount <span>/ person</span>
            </h3>
          </div>
          {tipAmount ? <p>{tipAmount.toFixed(2)}</p> : <p>$0.00</p>}
        </div>
        <div className={classes.section}>
          <div>
            <h3>
              Total <span>/ person</span>
            </h3>
          </div>
          {total ? <p>{total.toFixed(2)}</p> : <p>$0.00</p>}
        </div>
      </div>
      <Button
        className={`${classes.button} ${total && classes.buttonActive}`}
        onClick={resetHandler}
      >
        Reset
      </Button>
    </div>
  );
}

export default Total;
