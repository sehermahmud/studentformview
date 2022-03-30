import './App.css';
import {
  Route,
} from "react-router-dom";
import ColorTabs from "./header"
import Add from "./pages/add/add"
import View from "./pages/view/view"
import Details from "./pages/details/detail"

function App() {
  return (
    <div className="App">
      <ColorTabs />
      <br />
      <br />
      <Route path="/" exact component={View} />
      <Route path="/add" exact component={Add} />
      <Route path="/details" exact component={Details} />
    </div>
  );
}

export default App;
