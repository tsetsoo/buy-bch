import React, { useEffect, useState, useRef } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import QrScanner from "../qr-scanner/qr-scanner.component";
import FormContainer from "../form-container/form-container.component";

import { newOrder, getRate } from "../../api/buy-bch.api";

import { useIntl } from "react-intl";

import "../form.styles.scss";
import "./new-order.styles.scss";

function NewOrder({ setOrder, setErrorMessage, setLoading }) {
  const [bgn, setBgn] = useState("");
  const [email, setEmail] = useState("");
  const [bchState, setBchState] = useState({
    bchAddress: "",
    showQr: false,
  });
  const [bch, setBch] = useState("");

  const didMount = useRef(false);

  const intl = useIntl();

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
    const response = await newOrder(bgn, bchState.bchAddress, email);
    setLoading(false);
    if (response.order) {
      localStorage.setItem("orderId", response.order.id);
      setOrder(response.order);
    } else if (response.errorId) {
      setErrorMessage(response.errorId);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeBchAddress = (event) => {
    setBchState({ ...bchState, bchAddress: event.target.value });
  };

  const handleChangeBgn = (event) => {
    setBgn(event.target.value);
  };

  if (bchState.showQr) {
    return <QrScanner setBchState={setBchState} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChangeEmail}
          value={email}
          label={intl.formatMessage({ id: "order.email" })}
          required
        />
        <FormInput
          name="bchAddress"
          type="bchAddress"
          handleChange={handleChangeBchAddress}
          value={bchState.bchAddress}
          label={intl.formatMessage({ id: "order.bchAddress" })}
          required
          children={
            <div className="qr-button-container">
              <button
                className="custom-button qr-button"
                onClick={(e) => {
                  e.preventDefault();
                  setBchState({ ...bchState, showQr: true });
                }}
              >
                {intl.formatMessage({ id: "order.scanQr" })}
              </button>
            </div>
          }
        />
        <FormInput
          name="bgn"
          type="number"
          step={process.env.REACT_APP_BGN_STEP}
          handleChange={handleChangeBgn}
          value={bgn}
          label={intl.formatMessage({ id: "order.bgnAmount" })}
          required
          max={process.env.REACT_APP_MAX_BGN_AMOUNT}
          min={process.env.REACT_APP_MIN_BGN_AMOUNT}
        />
        <FormInput
          name="bch"
          type="text"
          value={bch ? bch.toString() : ""}
          label={intl.formatMessage({ id: "order.bchAmount" })}
          readOnly
        />
        <div className="group">
          <input type="checkbox" required name="termsConditions" />
          <label>
            {intl.formatMessage(
              {
                id: "order.termAndConditions",
              },
              {
                a: (url) => (
                  <a href={process.env.REACT_APP_TERMS_AND_CONDITIONS_URL}>
                    {url}
                  </a>
                ),
              }
            )}
          </label>
        </div>

        <div className="buttons">
          <CustomButton type="submit">
            {intl.formatMessage({ id: "order.buyButton" })}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default FormContainer(NewOrder);
