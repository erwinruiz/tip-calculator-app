import classes from "./Total.module.css";
import Button from "../UI/Button";

function Total() {
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div>
          <h3>
            Tip Amount <span>/ person</span>
          </h3>
        </div>
        <p>$0.00</p>
      </div>
      <div className={classes.section}>
        <div>
          <h3>
            Total <span>/ person</span>
          </h3>
        </div>
        <p>$0.00</p>
      </div>
      <Button className={classes.button}>Reset</Button>
    </div>
  );
}

export default Total;
