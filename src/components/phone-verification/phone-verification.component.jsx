import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { verifyPhone, verifyPhoneCode } from "../../api/buy-bch.api";
import { useIntl } from "react-intl";

import "../form.styles.scss";

function PhoneVerification({ orderId, setOrder }) {
  const [phone, setPhone] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const intl = useIntl();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (codeSent) {
      const response = await verifyPhoneCode(orderId, phone, validationCode);
      if (response.order) {
        setOrder(response.order);
      } else if (response.errorId) {
        setErrorMessage(intl.formatMessage({ id: response.errorId }));
      }
    } else {
      const response = await verifyPhone(orderId, phone);
      if (response) {
        setErrorMessage(intl.formatMessage({ id: response.errorId }));
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
          label={intl.formatMessage({ id: "phone.number" })}
          required
        />
        {codeSent ? (
          <FormInput
            name="validationCode"
            type="text"
            handleChange={handleValidationCodeChange}
            value={validationCode}
            label={intl.formatMessage({ id: "phone.smsCode" })}
            required
          />
        ) : null}
        <div className="buttons">
          <CustomButton type="submit">
            {intl.formatMessage({ id: "phone.submit" })}
          </CustomButton>
        </div>
      </form>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default PhoneVerification;
