import React, { useState, useRef } from "react";
import "./uploadimage.css";

import { FaCamera } from "react-icons/fa";

function ImageUpload(props) {
  const [image, setImage] = useState(false);
  const [iconcolor, setColor] = useState("rgb(202, 201, 201)");
  const [uploadedIconColor, setUploadedIconColor] = useState("transparent");
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const onMouseEnterPhotoContainer = () => {
    setColor("white");
    setUploadedIconColor("White");
  };

  const onMouseLeavePhotoContainer = () => {
    setColor("rgb(202, 201, 201)");
    setUploadedIconColor("transparent");
  };

  return (
    <div>
      <div className="res-box">
        <input
          style={{ display: "none" }}
          id="imageUpload"
          type="file"
          onChange={handleFileSelect}
          ref={fileInputRef}
        />
        <div
          className="upload-profile"
          onMouseEnter={onMouseEnterPhotoContainer}
          onMouseLeave={onMouseLeavePhotoContainer}
        >
          <label htmlFor="imageUpload" className="upload-label">
            <div className="img-icon" style={{ color: iconcolor }}>
              {!image && (
                <div>
                  <FaCamera />
                  <p className="select-picture-text">SELECT YOUR PICTURE</p>
                </div>
              )}
              {image && (
                <div>
                  <img
                    className="img"
                    src={URL.createObjectURL(image)}
                    style={{ objectFit: "cover" }}
                    alt="upload-img"
                  />
                  <div
                    className="inside-container"
                    style={{ color: uploadedIconColor }}
                  >
                    {/* <FaCamera /> */}
                    {/* <p className="select-picture-text">SELECT YOUR PICTURE</p> */}
                  </div>
                </div>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
