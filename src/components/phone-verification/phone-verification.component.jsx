import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { verifyPhone, verifyPhoneCode } from "../../api/buy-bch.api";

import "../new-order/new-order.styles.scss";

function PhoneVerification({ orderId, setOrder }) {
  const [phone, setPhone] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (codeSent) {
      const response = await verifyPhoneCode(orderId, phone, validationCode);
      if (response.order) {
        setOrder(response.order);
      } else if (response.errorMessage) {
        setErrorMessage(response.errorMessage);
      }
    } else {
      const response = await verifyPhone(orderId, phone);
      if (response) {
        setErrorMessage(response.errorMessage);
      } else {
        setCodeSent(!codeSent);
      }
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleValidationCodeChange = (event) => {
    setValidationCode(event.target.value);
  };

  return (
    <div className="new-order">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="phoneNumber"
          type="text"
          handleChange={handlePhoneChange}
          value={phone}
          label="Your Phone Number (e.g. +359888123456)"
          required
        />
        {codeSent ? (
          <FormInput
            name="validationCode"
            type="text"
            handleChange={handleValidationCodeChange}
            value={validationCode}
            label="SMS Code"
            required
          />
        ) : null}
        <div className="buttons">
          <CustomButton type="submit"> Submit </CustomButton>
        </div>
      </form>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default PhoneVerification;
