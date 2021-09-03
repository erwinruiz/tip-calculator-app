import Tip from "./Tip";
import Input from "../../UI/Input";
import classes from "./SelectTip.module.css";

function SelectTip() {
  const tipPercentage = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 25 },
    { value: 50 },
  ];
  return (
    <div>
      <h3>Select Tip %</h3>
      <div className={classes.tipsContainer}>
        {tipPercentage.map((tip, i) => (
          <Tip key={i} value={tip.value} />
        ))}
        <Input type="number" placeholder="Custom" />
      </div>
    </div>
  );
}

export default SelectTip;
