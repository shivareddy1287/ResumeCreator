// // import { Fragment } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // Switch, Redirect
// import "./App.css";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";

// function App() {
//   const updatedUrlResume = () =>{

//   }
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" Component={Home} />
//         <Route exact path="resume-page" Component={ResumePage} />
//         <Route exact path="mypdf"  Component={Mypdf} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// 1

// import React, { useRef, useState, useEffect } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";

// function App() {
//   const [profileUrl, setProfileUrl] = useState("");
//   const updatedUrlResume = (url) => {
//     console.log(111, url);
//     setProfileUrl(url);
//   };

//   useEffect(() => {}, [profileUrl]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route
//           exact
//           path="/resume-page"
//           element={<ResumePage updatedUrlResume={updatedUrlResume} />}
//         />
//         <Route
//           exact
//           path="/mypdf"
//           element={<Mypdf profileUrl={profileUrl} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState} from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";

// function App() {
//   const [profileUrl, setProfileUrl] = useState("1212");

//   const updatedUrlResume = (url) => {
//     console.log(111, url);
//     setProfileUrl(url);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route
//           exact
//           path="/resume-page"
//           element={<ResumePage updatedUrlResume={updatedUrlResume} />}
//         />
//         <Route
//           exact
//           path="/mypdf"
//           element={<Mypdf profileUrl={profileUrl} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";
// import LanguageContext from "./LanguageContext";

// class App extends Component {
//   state = {
//     profileUrl: "1212",
//     activeLanguage: "En",
//   };

//   updatedUrlResume = (url) => {
//     console.log(111, url);
//     this.setState({ profileUrl: url });
//   };

//   componentDidMount() {
//     console.log("final2", this.state.profileUrl, "final");
//   }

//   render() {
//     const { activeLanguage } = this.state;

//     return (
//       <LanguageContext.Provider value={{ activeLanguage }}>
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route
//               exact
//               path="/resume-page"
//               element={<ResumePage updatedUrlResume={this.updatedUrlResume} />}
//             />
//             <Route
//               exact
//               path="/mypdf"
//               element={<Mypdf profileUrl={this.state.profileUrl} />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </LanguageContext.Provider>
//     );
//   }
// }

// // export default App;

// import React, { Component } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";

// class App extends Component {
//   state = {
//     profileUrl: "1212",
//     isLinkTest: false,
//   };

//   updatedUrlResume = (url) => {
//     console.log(111, url);
//     this.setState({ profileUrl: url });
//   };

//   onClickButtonBack = () => {
//     this.setState({ isLinkTest: true });
//   };

//   render() {
//     const { profileUrl } = this.state;

//     return (
//       <div>
//         <BrowserRouter>
//           <div className="your-component-selector">
//             <h1>shiva</h1>
//           </div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/resume-page"
//               element={<ResumePage updatedUrlResume={this.updatedUrlResume} />}
//             />
//             <Route path="/mypdf" element={<Mypdf profileUrl={profileUrl} />} />
//           </Routes>
//         </BrowserRouter>

//         <Link to="/mypdf">
//           <button onClick={this.onClickButtonBack}>test back the link</button>
//         </Link>
//       </div>
//     );
//   }
// }

// // export default App;

// import React, { Component } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Home from "./components/Home/home";
// import ResumePage from "./components/ResumePage1/resumepage";
// import Mypdf from "./Mypdf";

// class App extends Component {
//   state = {
//     profileUrl: "1212",
//   };

//   updatedUrlResume = (url) => {
//     console.log(111, url);
//     this.setState({ profileUrl: url });
//   };

//   onClickButtonBack = () => {
//     this.props.history.push("/resume-page");
//   };

//   render() {
//     const { profileUrl } = this.state;

//     return (
//       <div>
//         <BrowserRouter>
//           <div className="your-component-selector">
//             <h1>shiva</h1>
//           </div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/resume-page"
//               element={<ResumePage updatedUrlResume={this.updatedUrlResume} />}
//             />
//             <Route path="/mypdf" element={<Mypdf profileUrl={profileUrl} />} />
//           </Routes>
//         </BrowserRouter>

//         <Link to="/mypdf">
//           <button onClick={this.onClickButtonBack}>test back the link</button>
//         </Link>
//       </div>
//     );
//   }
// }

// export default App;import React, { useEffect } from "react";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/home";
import ResumePage from "./components/ResumePage1/resumepage";
import Mypdf from "./Mypdf";

function App() {
  const [profileUrl, setProfileUrl] = useState("");
  const [name1, setName1] = useState("shiva aade");
  const navigate = useNavigate();
  const [isNavigated, setIsNavigated] = useState(false);
  const [inputValue12, setInputValue12] = useState("");

  const handleInputChangeInput = (value1) => {
    setInputValue12(value1);
  };
  const updatedUrlResume = (url) => {
    setProfileUrl(url);
  };

  const handleClick = () => {
    setIsNavigated(true);
    navigate("/resume-page");
    setTimeout(() => {
      navigate("/resume-page");
      setIsNavigated(false);
    }, 10000); // Delay of 1 second before navigating back to "/resume-page"
  };

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/resume-page"
            element={
              <ResumePage
                handleInputChangeInput={handleInputChangeInput}
                updatedUrlResume={updatedUrlResume}
              />
            }
          />
          <Route
            exact
            path="/mypdf"
            element={
              <Mypdf
                profileUrl={profileUrl}
                name1={name1}
                inputValue12={inputValue12}
              />
            }
          />
        </Routes>

        {!isNavigated && (
          <Link to="/mypdf">
            <button onClick={handleClick}>Go to Mypdf</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default App;
