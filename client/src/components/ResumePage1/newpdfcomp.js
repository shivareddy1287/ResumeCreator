import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isNavigated, setIsNavigated] = useState(false);

  return (
    <>
      <div>
        <Link to="/mypdf">
          <button>Go to Mypdf</button>
        </Link>
      </div>
    </>
  );
}

export default App;
