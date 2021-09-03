import classes from "./Input.module.css";

function Input(props) {
  const { imgPath, imgAlt, type, placeholder } = props;
  return (
    <div className={classes.container}>
      {imgPath && <img src={imgPath} alt={imgAlt} />}
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
