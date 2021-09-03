import Layout from "./Layout/Layout";
import SelectTip from "./Fields/SelectTip";
import classes from './Calculator.module.css'
import Bill from "./Fields/Bill";
import NumberOfPeople from "./Fields/NumberOfPeople";

function Calculator() {
  return (
    <Layout>
      <form className={classes.form}>
        <Bill />
        <SelectTip />
        <NumberOfPeople />
      </form>
    </Layout>
  );
}

export default Calculator;
