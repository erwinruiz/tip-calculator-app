import classes from "./Input.module.css";

function Input(props) {
  const { imgPath, imgAlt } = props;
  return (
    <div className={classes.container}>
      <img src={imgPath} alt={imgAlt} />
      <input type="number" placeholder="0" />
    </div>
  );
}

export default Input;
