import Tip from "./Tip";
import Input from "../../UI/Input";
import classes from "./SelectTip.module.css";

function SelectTip(props) {
  const tipPercentage = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 25 },
    { value: 50 },
  ];

  const changeTipHandler = (e) => {
    props.onAddTip(e.target.value);
  };

  const onAddTipHandler = (tip) => {
    props.onAddTip(tip);
  };

  return (
    <div className={classes.container}>
      <h3>Select Tip %</h3>
      <div className={classes.tipsContainer}>
        {tipPercentage.map((tip, i) => (
          <Tip key={i} value={tip.value} onAddTip={onAddTipHandler} />
        ))}
        <Input
          className={classes.input}
          type="number"
          placeholder="Custom"
          onChange={changeTipHandler}
        />
      </div>
    </div>
  );
}

export default SelectTip;
