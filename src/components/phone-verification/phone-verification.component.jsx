import React, { useState, useEffect } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import FormContainer from "../form-container/form-container.component";

import { verifyPhone, verifyPhoneCode } from "../../api/buy-bch.api";

import { useIntl } from "react-intl";

import { secondaryButtonClick } from "../../util/util.js";

import "../form.styles.scss";

function PhoneVerification({ orderId, setOrder, setErrorMessage, setLoading }) {
  const [phone, setPhone] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    let storedPhone = localStorage.getItem("phone");
    if (storedPhone) {
      setPhone(storedPhone);
      setCodeSent(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    if (codeSent) {
      const response = await verifyPhoneCode(orderId, phone, validationCode);
      if (response.order) {
        setOrder(response.order);
        localStorage.removeItem("phone");
      } else if (response.errorId) {
        setErrorMessage(response.errorId);
        setLoading(false);
      }
    } else {
      const response = await verifyPhone(orderId, phone);
      if (response) {
        setErrorMessage(response.errorId);
      } else {
        localStorage.setItem("phone", phone);
      }
      setLoading(false);
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleValidationCodeChange = (event) => {
    setValidationCode(event.target.value);
  };

  return (
    <div>
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
          <CustomButton
            className="secondary-button"
            onClick={(e) =>
              secondaryButtonClick(
                e,
                intl.formatMessage({ id: "currentOrder.confirmation" })
              )
            }
          >
            {intl.formatMessage({ id: "currentOrder.reset" })}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default FormContainer(PhoneVerification);
