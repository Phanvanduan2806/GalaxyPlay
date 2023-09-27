import logo from "./logo.svg";
import "./App.css";
import Charts from "./component/Dashboard/Charts/Charts";
import "./component/scss/style.scss";
import Login from "./component/Login/Login";
import { useState } from "react";
import Home from "./component/Home/Home";
function App() {
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);
  return (
    <>
      {login ? (
        <Login setLogin={setLogin} />
      ) : home ? (
        <Home />
      ) : (
        <Charts setLogin={setLogin} setHome={setHome} />
      )}
    </>
  );
}
export default App;
