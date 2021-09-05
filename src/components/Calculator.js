import Layout from "./Layout/Layout";
import SelectTip from "./Fields/SelectTip/SelectTip";
import classes from "./Calculator.module.css";
import Bill from "./Fields/Bill";
import NumberOfPeople from "./Fields/NumberOfPeople";
import Total from "./Total/Total";
import { useState, useEffect } from "react";

function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [result, setResult] = useState({
    tipAmount: 0,
    total: 0,
  });

  useEffect(() => {
    if (bill > 0 && tip > 0 && numberOfPeople > 0) {
      const tipAmount = (bill * tip) / 100 / numberOfPeople;
      const total = bill / numberOfPeople + tipAmount;
      setResult({ tipAmount, total });
    }
  }, [bill, tip, numberOfPeople]);

  const addBillHandler = (bill) => {
    setBill(bill);
  };

  const addTipHandler = (tip) => {
    setTip(tip);
  };

  const addNumberOfPeopleHandler = (numberOfPeople) => {
    setNumberOfPeople(numberOfPeople);
  };

  return (
    <Layout>
      <form className={classes.form}>
        <Bill onAddBill={addBillHandler} />
        <SelectTip onAddTip={addTipHandler} />
        <NumberOfPeople onAddNumberOfPeople={addNumberOfPeopleHandler} />
      </form>
      <Total result={result} />
    </Layout>
  );
}

export default Calculator;
