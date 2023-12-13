// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = function (message, type) {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const ToggleMode = function () {
    if (Mode === "light") {
      setMode("dark");
      // color:"dark",
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode Enabled", "secondary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode Disabled", "dark");
    }
  };

  return (
    <>
      <Router>
        <NavBar title="K3W4L" mode={Mode} toggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            ,
            <Route
              exact
              path="/about"
              element={<About mode={Mode} alert={alert} />}
            ></Route>
            <Route
              exact
              path=""
              element={
                <Textform mode={Mode} alert={alert} showAlert={showAlert} />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
