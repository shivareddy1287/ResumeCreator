import { Component } from "react";
import "./personalprojects.css";
class AddPersonalProjects extends Component {
  state = { collegeProject: "", createdDet: "", addingDet: "" };

  onChangeCollegeProj = (e) => {
    this.setState({ collegeProject: e.target.value });
    this.props.onChangeFunPersonalProjectsChangeValMain(
      e.target.value,
      this.state.createdDet,
      this.state.addingDet,
      this.props.details.id
    );
  };

  onChangeCreated = (e) => {
    this.setState({ createdDet: e.target.value });
    this.props.onChangeFunPersonalProjectsChangeValMain(
      this.state.collegeProject,
      e.target.value,
      this.state.addingDet,
      this.props.details.id
    );
  };

  onChangeAddingDetails = (e) => {
    this.setState({ addingDet: e.target.value });
    this.props.onChangeFunPersonalProjectsChangeValMain(
      this.state.collegeProject,
      this.state.createdDet,
      e.target.value,
      this.props.details.id
    );
  };

  onAddCollegesub = () => {
    this.props.onAddNewCollege();
  };

  onDeleteCollegesub = () => {
    this.props.OnDeleteMainPersonalProjects(this.props.details.id);
  };

  render() {
    return (
      <div>
        <div className="r2-pp-button-container">
          <button
            className="r2-pp-but-1"
            type="button"
            onClick={this.onDeleteCollegesub}
          >
            -
          </button>
          <button
            type="button"
            className="r2-pp-but-2"
            onClick={this.onAddCollegesub}
          >
            +
          </button>
        </div>
        <br />
        <input
          type="text"
          placeholder="College Project"
          className="r2-college-project"
          onChange={this.onChangeCollegeProj}
        />
        <br />
        <input
          type="text"
          placeholder="created the details"
          className="r2-created-details"
          onChange={this.onChangeCreated}
        />
        <br />
        <input
          type="text"
          placeholder="added the details"
          className="r2-added-details"
          onChange={this.onChangeAddingDetails}
        />
        <br />
      </div>
    );
  }
}

export default AddPersonalProjects;
