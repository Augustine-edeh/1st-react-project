import "./MainContainer.css";
import Time from "./Time";
import Date from "./Date";
function MainContainer() {
  return (
    <main className="main-container">
      <h1>I'm the Main Container Component!</h1>
      <Time />
      <Date />
    </main>
  );
}
export default MainContainer;
