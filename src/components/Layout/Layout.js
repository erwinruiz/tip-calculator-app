import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
}

export default Layout;
