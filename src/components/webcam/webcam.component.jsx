import React, { useRef, useCallback, useState } from "react";

import CustomButton from "../custom-button/custom-button.component";

import { useIntl } from "react-intl";
import Webcam from "react-webcam";

import "../form.styles.scss";
import "./webcam.component.styles.scss";

const WebcamCapture = ({ setPhotoToReturn }) => {
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const intl = useIntl();

  const dataURLtoFile = (dataurl) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], "image-to-upload", { type: mime });
  };

  const capture = useCallback(
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    },
    [webcamRef, setPhoto]
  );

  return (
    <div className="form-container">
      {photo ? (
        <div>
          {photo && <img alt="To confirm" src={photo} />}
          <div className="buttons">
            <CustomButton
              className="custom-button-green"
              onClick={() => setPhotoToReturn(dataURLtoFile(photo))}
            >
              {intl.formatMessage({ id: "webcam.submit" })}
            </CustomButton>
            <CustomButton
              className="custom-button-red"
              onClick={(e) => {
                e.preventDefault();
                setPhoto(null);
              }}
            >
              {intl.formatMessage({ id: "webcam.scanAgain" })}
            </CustomButton>
          </div>
        </div>
      ) : (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            forceScreenshotSourceSize={true}
            className="webcam"
          />
          <div className="buttons">
            <CustomButton onClick={capture}>
              {intl.formatMessage({ id: "webcam.takePhoto" })}
            </CustomButton>
            <CustomButton
              className="secondary-button"
              onClick={() => setPhotoToReturn(null)}
            >
              {intl.formatMessage({ id: "webcam.back" })}
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
