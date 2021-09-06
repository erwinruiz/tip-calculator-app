import Layout from "./Layout/Layout";
import SelectTip from "./Fields/SelectTip/SelectTip";
import classes from "./Calculator.module.css";
import Bill from "./Fields/Bill";
import NumberOfPeople from "./Fields/NumberOfPeople";
import Total from "./Total/Total";
import { useState, useEffect } from "react";

const initialState = {
  tipAmount: 0,
  total: 0,
};

function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    if (bill <= 0 || tip <= 0 || numberOfPeople <= 0) {
      setResult(initialState);
      return;
    }
    const tipAmount = (bill * tip) / 100 / numberOfPeople;
    const total = bill / numberOfPeople + tipAmount;
    setResult({ tipAmount, total });
  }, [bill, tip, numberOfPeople]);

  const addBillHandler = (bill) => {
    setBill(bill);
  };

  const addTipButtonHandler = (selectedTip) => {
    setTipInput("");
    // Compare if the selected button already is active to remove 'buttonActive' CSS class
    if (tip !== selectedTip) {
      setTip(selectedTip);
    } else {
      setTip("");
    }
  };

  const addTipInputHandler = (tip) => {
    setTipInput(tip);
    setTip(tip);
  };

  const addNumberOfPeopleHandler = (numberOfPeople) => {
    setNumberOfPeople(numberOfPeople);
  };

  const resetFieldsHandler = () => {
    setBill("");
    setTip("");
    setTipInput("");
    setNumberOfPeople("");
  };

  return (
    <Layout>
      <form className={classes.form}>
        <Bill onAddBill={addBillHandler} bill={bill} />
        <SelectTip
          onAddTipButton={addTipButtonHandler}
          onAddTipInput={addTipInputHandler}
          tipInput={tipInput}
          tip={tip} // to manipulate CSS class of active button
        />
        <NumberOfPeople
          onAddNumberOfPeople={addNumberOfPeopleHandler}
          numberOfPeople={numberOfPeople}
        />
      </form>
      <Total result={result} onResetFields={resetFieldsHandler} />
    </Layout>
  );
}

export default Calculator;
