import Layout from "./Layout/Layout";
import SelectTip from "./Fields/SelectTip/SelectTip";
import classes from "./Calculator.module.css";
import Bill from "./Fields/Bill";
import NumberOfPeople from "./Fields/NumberOfPeople";
import Total from "./Total/Total";

function Calculator() {
  return (
    <Layout>
      <form className={classes.form}>
        <Bill />
        <SelectTip />
        <NumberOfPeople />
      </form>
      <Total />
    </Layout>
  );
}

export default Calculator;
