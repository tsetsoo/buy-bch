import React, { useEffect, useState, useRef } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { newOrder, getRate } from "../../api/buy-bch.api";
import Spinner from "../spinner/spinner.component";

import "../form.styles.scss";

function NewOrder({ setOrder }) {
  const [bgn, setBgn] = useState("");
  const [email, setEmail] = useState("");
  const [bchAddress, setBchAddress] = useState("");
  const [bch, setBch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      const timeOutId = setTimeout(async () => {
        const bchAmount = await getRate(bgn);
        setBch(bchAmount);
      }, 1000);
      return () => clearTimeout(timeOutId);
    } else {
      didMount.current = true;
    }
  }, [bgn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await newOrder(bgn, bchAddress, email);
    setLoading(false);
    if (response.order) {
      localStorage.setItem("orderId", response.order.id);
      setOrder(response.order);
    } else if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeBchAddress = (event) => {
    setBchAddress(event.target.value);
  };

  const handleChangeBgn = (event) => {
    setBgn(event.target.value);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="new-order">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChangeEmail}
          value={email}
          label="Your Email"
          required
        />
        <FormInput
          name="bchAddress"
          type="bchAddress"
          handleChange={handleChangeBchAddress}
          value={bchAddress}
          label="Your Bitcoin Cash Wallet Address"
          required
        />
        <FormInput
          name="bgn"
          type="number"
          step="0.001"
          handleChange={handleChangeBgn}
          value={bgn}
          label="Amount of BGN you want to spend"
          required
          max={process.env.REACT_APP_MAX_BGN_AMOUNT}
          min={process.env.REACT_APP_MIN_BGN_AMOUNT}
        />
        <FormInput
          name="bch"
          type="text"
          value={bch ? bch.toString() : ""}
          label="Estimated amount of BCH you will receive"
          readOnly
        />
        <div className="group">
          <input type="checkbox" required name="termsConditions" />
          <label>
            I Accept{" "}
            <a href={process.env.REACT_APP_TERMS_AND_CONDITIONS_URL}>
              Terms and Conditions
            </a>
          </label>
        </div>

        <div className="buttons">
          <CustomButton type="submit"> Buy BCH </CustomButton>
        </div>
      </form>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default NewOrder;
