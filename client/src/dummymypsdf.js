import axios from "axios";
import React, { Component } from "react";
import "./mypdf.css";

class Mypdf extends Component {
  state = { dataVal: [] };

  getUsers = async () => {
    const response = await axios.get("http://localhost:5000/datapdf");
    if (response.status === 200) {
      this.setState({ dataVal: response.data });
    }
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    if (this.state.dataVal.name) {
      console.log(this.state.dataVal);
    }

    return (
      <div>
        <h1>shiva</h1>
        {this.state.dataVal.name && <h1>{this.state.dataVal.name}</h1>}
        <div>
          <div>
            <div>
              <h1 class="head">shiva shiva</h1>
              <p id="para1" class="">
                descriptions descriptions descriptions descriptions
              </p>

              <p class="fontStyles1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p class="fontIntial1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p class="fontStyles2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p class="fontStyles3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypdf;




// css

@font-face {
    font-family: "Quicksand Light Light";
    src: url("./Quicksand2.ttf");
    /* Add additional src lines for different font file formats */
  }
  
  /* @font-face {
    font-family: "Lusitana Regular";
    src: url(./lusitana1.woff);
    
  } */
  
  .head {
  }
  .para {
    display: none;
  }
  .fontStyles1 {
    font-family: "Lusitana Regular";
    font-size: 20px;
  }
  
  .fontStyles2 {
    font-family: "Lucida Sans Unicode";
    font-size: 20px;
  }
  .fontStyles3 {
    font-family: "Quicksand Light Light";
    font-size: 20px;
  }
  
  .colors1 {
    color: #359ebf;
  }
  
  .colors12 {
    color: #647c41;
  }
  .colors13 {
    color: #000000;
  }
  
  .fontIntial1 {
    font-size: 20px;
  }
  
  /* css pdf */
  