import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { verifyPhone, verifyPhoneCode } from "../../api/buy-bch.api";

import "../new-order/new-order.styles.scss";

function PhoneVerification({ orderId, setOrder }) {
  const [phone, setPhone] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (codeSent) {
      const order = await verifyPhoneCode(orderId, phone, validationCode);
      setOrder(order);
    } else {
      verifyPhone(orderId, phone);
      setCodeSent(!codeSent);
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
          label="phoneNumber"
          required
        />
        {codeSent ? (
          <FormInput
            name="validationCode"
            type="text"
            handleChange={handleValidationCodeChange}
            value={validationCode}
            label="validationCode"
            required
          />
        ) : null}
        <div className="buttons">
          <CustomButton type="submit"> Submit </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default PhoneVerification;
