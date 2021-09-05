import classes from "./Input.module.css";

function Input(props) {
  const { imgPath, imgAlt, type, placeholder } = props;
  return (
    <div className={classes.container}>
      {imgPath && <img src={imgPath} alt={imgAlt} />}
      <input
        className={props.className}
        type={type}
        placeholder={placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
