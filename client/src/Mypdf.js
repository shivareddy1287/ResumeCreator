import axios from "axios";
import React, { Component } from "react";
import "./mypdf.css";

class Mypdf extends Component {
  state = { dataVal: [], profilePicUrl: "" };

  getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/datapdf", {
        responseType: "arraybuffer",
      });

      const base64Data = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      // const newDataUser = this.state.dataVal;
      // newDataUser.newUsersDataFront.isDataUrlCheck = false;
      // this.setState({});

      // console.log(newDataUser, 111111111111111111);
      const photoUrl = `data:image/jpeg;base64,${base64Data}`;
      this.setState({ profilePicUrl: photoUrl });
      // this.setState({ profilePicUrl: photoUrl, dataVal: newDataUser });
      // if (Array.isArray(this.state.dataVal.newUsersDataFront)) {
      //   const newDataUser = this.state.dataVal.newUsersDataFront.map(
      //     (each) => ({
      //       ...each,
      //       isDataUrlCheck: false,
      //     })
      //   );
      //   this.setState({ profilePicUrl: photoUrl, dataVal: newDataUser });
      //   // Rest of your code that uses newData
      // } else {

      //   console.error("newUsersDataFront is not an array");
      // }
      // const newDataUser = this.state.dataVal.newUsersDataFront.map((each) => ({
      //   ...each,
      //   isDataUrlCheck: false,
      // }));
      // console.log(newDataUser);
    } catch (error) {
      console.error("Error retrieving file:", error);
    }
  };

  // getUsers = async () => {
  //   // try {
  //   //   const response = await axios.get("http://localhost:5000/datapdf");
  //   //   const imageUrl = response.data;
  //   //   // Do something with the imageUrl
  //   //   console.log(imageUrl, "last1111111111111111111111");
  //   // } catch (error) {
  //   //   console.log(`${error} occurs`);
  //   // }
  //   try {
  //     const response = await axios.get("http://localhost:5000/datapdf");
  //     console.log(response.data, "data123");
  //     // const photoBlob = new Blob([response.data], {
  //     //   type: response.headers["content-type"],
  //     // });
  //     // const photoUrl = URL.createObjectURL(photoBlob);
  //     // console.log(photoUrl);
  //   } catch (error) {
  //     console.error("Error retrieving file:", error);
  //   }
  // };

  getUsersData = async () => {
    const response = await axios.get("http://localhost:5000/datapdfJson");
    if (response.status === 200) {
      this.setState({ dataVal: response.data });
    }
  };

  componentDidMount() {
    this.getUsersData();
  }
  render() {
    const { dataVal } = this.state;
    console.log(dataVal.newUsersDataFront, "ischeckdata");
    if (
      dataVal.newUsersDataFront !== undefined &&
      dataVal.newUsersDataFront.isDataUrlCheck === true
    ) {
      console.log(dataVal.newUsersDataFront.isDataUrlCheck, "ischeckdata2");
    }
    console.log(dataVal.profileImageTrueLet, true);

    if (dataVal.profileImageTrueLet === true) {
      dataVal.profileImageTrueLet = false;
      this.getUsers();
    }

    const { profileUrl, name1, inputValue12 } = this.props;

    return (
      <div id="disProfile" className="">
        {dataVal.newUsersDataFront !== undefined &&
          dataVal.newUsersDataFront.isDataUrlCheck && (
            <img
              className="profile-img"
              alt="img1"
              src={this.state.profilePicUrl}
            />
          )}
        <h1>{name1}</h1>
        <h1>{inputValue12}</h1>
        <h1>{dataVal.inputValueMain}</h1>
        {/* <h1>{dataVal.name}</h1> */}
      </div>
    );
  }
}

export default Mypdf;
