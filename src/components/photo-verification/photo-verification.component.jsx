import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { verifyPhoto } from "../../api/buy-bch.api";

import "../form.styles.scss";
import "./photo-verification.styles.scss";

function PhotoVerification({
  orderId,
  setOrder,
  photoSuffix,
  declarationFormUrl,
}) {
  const [photo, setPhoto] = useState(null);
  const [key, setKey] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    const response = await verifyPhoto(orderId, photo, photoSuffix);
    if (response.order) {
      setPhoto(null);
      setKey(key === 0 ? 1 + key : key - 1);
      setOrder(response.order);
    } else if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
    }
  };

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPhoto(img);
    }
  };

  const photoName = () => {
    if (photoSuffix === "id_photo") {
      return "photo of your ID";
    } else if (photoSuffix === "face_photo") {
      return "selfie";
    } else if (photoSuffix === "declaration_form") {
      return "a photo copy of your declaration form";
    }
  };

  return (
    <div className="new-order">
      <p>Please upload a {photoName() + " in PNG or JPEG format"}</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="photo"
          type="file"
          handleChange={handleChange}
          required
          key={key}
        />
        {photo ? (
          <img alt="To upload" src={URL.createObjectURL(photo)} />
        ) : null}
        {declarationFormUrl ? (
          <p>
            Please download declaration form from{" "}
            <a href={declarationFormUrl}>here</a>
          </p>
        ) : null}
        <div className="buttons">
          <CustomButton type="submit"> UPLOAD </CustomButton>
        </div>
      </form>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default PhotoVerification;
