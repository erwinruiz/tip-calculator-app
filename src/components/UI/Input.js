import classes from "./Input.module.css";

function Input(props) {
  const { imgPath, imgAlt, type, placeholder, value } = props;
  return (
    <div className={classes.container}>
      {imgPath && <img src={imgPath} alt={imgAlt} />}
      <input
        className={props.className}
        type={type}
        placeholder={placeholder}
        onChange={props.onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
