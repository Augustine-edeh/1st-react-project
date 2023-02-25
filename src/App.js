import MainContainer from "./Components/MainContainer";
import Time from "./Components/Time";
import Date from "./Components/Date";
function App() {
  return (
    <MainContainer className="overall-container">
      <Time />
      <Date />
    </MainContainer>
  );
}

export default App;
