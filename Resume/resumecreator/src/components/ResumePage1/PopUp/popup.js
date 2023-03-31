import { Component } from "react";
import { ChromePicker } from "react-color";
import "./popup.css";

class ColorPiker extends Component {
  state = {
    showColors: false,
    topButtoncolor: "blue",
    topColorBorder: "0px",
    bottomColorBorder1: "0px",
    bottomColorBorder2: "0px",
    bottomColorBorder3: "0px",
    bottomColorBorder4: "0px",
    bottomColorBorder5: "0px",
    bottomColorBorder6: "0px",
    showHexColorBox: false,
    hexButtonColor: "lightblue",
  };

  togglePopup = () => {
    const { showColors } = this.state;
    this.setState({ showColors: !showColors });
  };

  changeColors = (color) => {
    this.setState({ topButtoncolor: color, showColors: false });
    this.props.changeFunCol(color);
  };

  handleHexColorPiker = () => {
    const { showHexColorBox } = this.state;
    this.setState({ showHexColorBox: !showHexColorBox });
  };

  handleOnMouseEnter = () => {
    this.setState({ topColorBorder: "3px solid white" });
  };

  handleOnMouseLeave = () => {
    this.setState({ topColorBorder: "0px" });
  };

  handleOnMouseEnterBottomColor1 = (color) => {
    this.setState({ bottomColorBorder1: `3px solid ${color}` });
  };

  handleOnMouseEnterBottomColor2 = (color) => {
    this.setState({ bottomColorBorder2: `3px solid ${color}` });
  };

  handleOnMouseEnterBottomColor3 = (color) => {
    this.setState({ bottomColorBorder3: `3px solid ${color}` });
  };

  handleOnMouseEnterBottomColor4 = (color) => {
    this.setState({ bottomColorBorder4: `3px solid ${color}` });
  };

  handleOnMouseEnterBottomColor5 = (color) => {
    this.setState({ bottomColorBorder5: `3px solid ${color}` });
  };

  handleOnMouseEnterBottomColor6 = (color) => {
    this.setState({ bottomColorBorder6: `3px solid ${color}` });
  };

  handleChangeHexColor = (newColor) => {
    this.setState({
      hexButtonColor: newColor.hex,
      topButtoncolor: newColor.hex,
    });
    this.props.changeFunCol(newColor.hex);
  };

  handleOnMouseLeaveBottomColors = () => {
    this.setState({ bottomColorBorder1: "0px" });
    this.setState({ bottomColorBorder2: "0px" });
    this.setState({ bottomColorBorder3: "0px" });
    this.setState({ bottomColorBorder4: "0px" });
    this.setState({ bottomColorBorder5: "0px" });
    this.setState({ bottomColorBorder6: "0px" });
  };

  render() {
    const {
      showColors,
      topButtoncolor,
      topColorBorder,
      bottomColorBorder1,
      bottomColorBorder2,
      bottomColorBorder3,
      bottomColorBorder4,
      bottomColorBorder5,
      bottomColorBorder6,
      showHexColorBox,
      hexButtonColor,
    } = this.state;

    return (
      <div className="pop-up-container">
        <div className="button-container">
          <button
            className="pop-up-button"
            style={{ backgroundColor: topButtoncolor, border: topColorBorder }}
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}
            onClick={this.togglePopup}
          ></button>
        </div>
        {showColors && (
          <div className="pop-up-background-container">
            <button
              className="color-selecting-button1"
              style={{ border: bottomColorBorder1 }}
              onMouseEnter={() =>
                this.handleOnMouseEnterBottomColor1("#fa9f98")
              }
              onMouseLeave={this.handleOnMouseLeaveBottomColors}
              onClick={() => this.changeColors("red")}
            ></button>
            <button
              className="color-selecting-button2"
              onClick={() => this.changeColors("blue")}
              style={{ border: bottomColorBorder2 }}
              onMouseEnter={() =>
                this.handleOnMouseEnterBottomColor2("#7896fa")
              }
              onMouseLeave={this.handleOnMouseLeaveBottomColors}
            ></button>
            <button
              className="color-selecting-button3"
              onClick={() => this.changeColors("green")}
              style={{ border: bottomColorBorder3 }}
              onMouseEnter={() =>
                this.handleOnMouseEnterBottomColor3("#82fa9e")
              }
              onMouseLeave={this.handleOnMouseLeaveBottomColors}
            ></button>
            <button
              className="color-selecting-button4"
              onClick={() => this.changeColors("yellow")}
              style={{ border: bottomColorBorder4 }}
              onMouseEnter={() =>
                this.handleOnMouseEnterBottomColor4("#d8fa93")
              }
              onMouseLeave={this.handleOnMouseLeaveBottomColors}
            ></button>
            <button
              className="color-selecting-button5"
              onClick={() => this.changeColors("purple")}
              style={{ border: bottomColorBorder5 }}
              onMouseEnter={() =>
                this.handleOnMouseEnterBottomColor5("#e4b4fa")
              }
              onMouseLeave={this.handleOnMouseLeaveBottomColors}
            ></button>
            <div>
              <button
                onClick={this.handleHexColorPiker}
                className="color-selecting-button6"
                onMouseEnter={() =>
                  this.handleOnMouseEnterBottomColor6("orange")
                }
                onMouseLeave={this.handleOnMouseLeaveBottomColors}
                style={{
                  backgroundColor: hexButtonColor,
                  border: bottomColorBorder6,
                }}
              >
                i
              </button>
              {showHexColorBox && (
                <div style={{ position: "absolute" }}>
                  <ChromePicker
                    color={hexButtonColor}
                    onChange={this.handleChangeHexColor}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPiker;
