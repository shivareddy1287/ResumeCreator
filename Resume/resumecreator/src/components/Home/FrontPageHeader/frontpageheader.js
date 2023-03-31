import { Component } from "react";
import "./frontpageheader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

library.add(faRProject);

class FrontPageHeader extends Component {
  render() {
    return (
      <nav className="front-page-nav-container">
        <FontAwesomeIcon icon={["fab", "r-project"]} size="3x" />
        <div>
          <p className="nav-heading">
            Resume Maker <br /> .Online{" "}
          </p>
        </div>
      </nav>
    );
  }
}

export default FrontPageHeader;
