//import logo from "./logo.svg";
import "./App.css";
import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  //const returnSting = Test("Testing ");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    //1
    // <>
    //   <ReduxProvider>
    //     <RoutesProvider />
    //   </ReduxProvider>
    // </>
    //2
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
    //3
    // <div className="App">
    //   <Header />
    //   <Routes></Routes>
    // </div>
  );
}

export default App;
