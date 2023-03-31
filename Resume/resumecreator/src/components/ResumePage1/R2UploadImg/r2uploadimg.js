import { Component } from "react";
import "./r2uploadimg.css";

class UploadImg extends Component {
  state = {
    selectedFile: null,
    profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    showUploadBtn: false,
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result);
      this.setState({
        profilePic: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  toggleUploadBtn = (show) => {
    this.setState({
      showUploadBtn: show,
    });
  };

  render() {
    const { profilePic, showUploadBtn } = this.state;

    return (
      <div
        className="profile-pic-container"
        onMouseEnter={() => this.toggleUploadBtn(true)}
        onMouseLeave={() => this.toggleUploadBtn(false)}
      >
        <img
          style={{ objectFit: "cover" }}
          className="image"
          id="photo"
          src={profilePic}
          alt="Profile"
        />
        <input type="file" id="file" onChange={this.fileSelectedHandler} />
        {showUploadBtn && (
          <label htmlFor="file" id="uploadBtn">
            Choose Photo
          </label>
        )}
      </div>
    );
  }
}

export default UploadImg;
