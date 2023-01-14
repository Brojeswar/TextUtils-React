import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} hideAlert={hideAlert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text below to analyze"
                mode={mode}
                showAlert={showAlert}
                hideAlert={hideAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
