// import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Switch, Redirect
import "./App.css";
import Home from "./components/Home/home";
import ResumePage from "./components/ResumePage1/resumepage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="resume-page" Component={ResumePage} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
