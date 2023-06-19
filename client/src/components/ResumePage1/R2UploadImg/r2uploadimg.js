import React, { useRef, useState } from "react";
import Croppr from "croppr";
import "croppr/dist/croppr.min.css";
import { FaCamera } from "react-icons/fa";
import "./r2uploadimg.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ImageUpload = (props) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [popupOverLay, setPopupOverLay] = useState("");
  const [cropPopup, setCropPopup] = useState(false);
  const [camColor, setCamColor] = useState({ color: "grey" });
  const imageRef = useRef(null);
  const cropperRef = useRef(null);

  const { profileUrl, updateProfilePic } = props;

  if (croppedImage === null) {
    setCroppedImage(profileUrl);
    if (profileUrl !== "") {
      setCamColor({ color: "transparent" });
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setPopupOverLay("popup-overlay");
      setCropPopup(true);
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;

      const image = imageRef.current;
      image.src = imageUrl;

      if (cropperRef.current) {
        cropperRef.current.destroy();
      }

      cropperRef.current = new Croppr(image, {
        aspectRatio: 0.8,
        startSize: [300, 100], // Initial size of the crop box
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onMouseEnterCamIcon = () => {
    setCamColor({ color: "white" });
  };

  const onMouseLeaveCamIcon = () => {
    if (croppedImage) {
      setCamColor({ color: "transparent" });
    } else {
      setCamColor({ color: "grey" });
    }
  };

  const onClickCropButton = () => {
    if (cropperRef.current) {
      const data = cropperRef.current.getValue();
      if (data) {
        const image = imageRef.current;
        const defaultWidth = 150;
        const defaultHeight = 150;

        const imageUrl = image.src || croppedImage; // Store the URL in a variable

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const { x, y, width, height } = data;

        canvas.width = width || defaultWidth;
        canvas.height = height || defaultHeight;

        context.drawImage(
          image,
          x,
          y,
          width || defaultWidth,
          height || defaultHeight,
          0,
          0,
          width || defaultWidth,
          height || defaultHeight
        );

        const newCroppedImage = canvas.toDataURL() || imageUrl; // Store the cropped image URL in a variable

        setCroppedImage(newCroppedImage);
        updateProfilePic(newCroppedImage, newCroppedImage);
      }
    }
    setCamColor({ color: "transparent" });
    setPopupOverLay("");
    setCropPopup(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6" align="center">
          <label htmlFor="browseImage" className="cam-icon-container">
            <FaCamera
              style={camColor}
              onMouseEnter={onMouseEnterCamIcon}
              onMouseLeave={onMouseLeaveCamIcon}
              className="cameraIcon"
            />
          </label>
          {cropPopup && (
            <div className={popupOverLay}>
              <div className="pop-up-box">
                <div
                  id="display_image_di"
                  style={{
                    backgroundColor: "white",
                    padding: "10px",
                    width: "400px",
                  }}
                >
                  <img
                    ref={imageRef}
                    name="display_image_data"
                    id="display_image_data"
                    src="dummy-image.png"
                    alt="Pic"
                  />
                </div>

                <div className="crop-upload-photo-button">
                  <span className="upload-btn-span" onClick={onClickCropButton}>
                    <FontAwesomeIcon
                      className="upload-icon"
                      icon={faCloudArrowUp}
                    />
                    <p className="upload-button-name">Upload</p>
                  </span>
                </div>
              </div>
            </div>
          )}
          <input
            type="file"
            name="browse_image"
            id="browseImage"
            style={{ display: "none" }}
            accept="image/*"
            className="profile-crop-img"
            onChange={handleFileChange}
          />

          {croppedImage && (
            <img
              name="cropped_image_data"
              id="cropped_image_data"
              src={croppedImage}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
              alt="Cropped Picturee"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
