import { Component } from "react";
import FrontPageHeader from "./FrontPageHeader/frontpageheader";
import FrontPageBody from "./FrontPageBody/frontpagebody";
import SampleResume from "./SampleResume/sampleresume";
import Features from "./Features/features";
import FrequentlyAskedQuestions from "./FrontPageFAQ/frontpagefaq";
import "./home.css";

class Home extends Component {
  state = { isTriggered: false };
  onClickedCreateButton = () => {
    console.log("Triggered");
    const { isTriggered } = this.state;
    this.setState({ isTriggered: !isTriggered });
  };
  render() {
    const { isTriggered } = this.state;
    console.log(isTriggered);
    return (
      <div className="top-container">
        <div className="Apps">
          <div className="head-left-container">
            <FrontPageHeader />
            <FrontPageBody trailsFun={this.onClickedCreateButton} />
          </div>
          {isTriggered && <SampleResume message={true} />}
          {!isTriggered && <SampleResume message={false} />}
        </div>
        <hr />
        {/* <Features />
        <FrequentlyAskedQuestions /> */}
        <hr />
      </div>
    );
  }
}
export default Home;
