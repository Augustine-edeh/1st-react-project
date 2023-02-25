import "./MainContainer.css";
function MainContainer(props) {
  const classes = "main " + props.className;
  return (
    <main className={classes}>
      <h1>I'm the Main Container Component!</h1>
      {props.children}
    </main>
  );
}
export default MainContainer;
