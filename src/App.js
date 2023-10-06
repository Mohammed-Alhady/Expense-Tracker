import Header from "./Components/Header";
import Body from "./Components/Body";
import { GlobalProvider } from "./Context/GlobalState";
import "./style/css/index.min.css";

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <Body />
    </GlobalProvider>
  );
}

export default App;
