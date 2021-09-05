import classes from "./Total.module.css";
import Button from "../UI/Button";

function Total(props) {
  const { tipAmount, total } = props.result;

  const resetHandler = () => {
    props.onResetFields();
  }
  return (
    <div className={classes.container}>
      <div className={classes.sections}>
        <div className={classes.section}>
          <div>
            <h3>
              Tip Amount <span>/ person</span>
            </h3>
          </div>
          {tipAmount > 0 ? <p>{tipAmount.toFixed(2)}</p> : <p>$0.00</p>}
        </div>
        <div className={classes.section}>
          <div>
            <h3>
              Total <span>/ person</span>
            </h3>
          </div>
          {total > 0 ? <p>{total.toFixed(2)}</p> : <p>$0.00</p>}
        </div>
      </div>
      <Button className={classes.button} onClick={resetHandler}>Reset</Button>
    </div>
  );
}

export default Total;
