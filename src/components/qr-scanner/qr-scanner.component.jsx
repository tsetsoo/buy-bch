import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";

import { useIntl } from "react-intl";
import QrReader from "react-qr-reader";

import "../form.styles.scss";

function QrScanner({ setBchState }) {
  const [bchAddress, setBchAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const intl = useIntl();

  const setBchAddressAndReturn = (e) => {
    e.preventDefault();
    setBchState({ bchAddress: bchAddress ? bchAddress : "", showQr: false });
  };

  return (
    <div className="form-container">
      {bchAddress ? (
        <div>
          <p>{intl.formatMessage({ id: "qrScanner.confirmationMessage" })}</p>
          <p>{bchAddress}</p>
          <div className="buttons">
            <CustomButton
              className="custom-button-green"
              onClick={setBchAddressAndReturn}
            >
              {intl.formatMessage({ id: "qrScanner.submit" })}
            </CustomButton>
            <CustomButton
              className="custom-button-red"
              onClick={(e) => {
                e.preventDefault();
                setBchAddress("");
              }}
            >
              {intl.formatMessage({ id: "qrScanner.scanAgain" })}
            </CustomButton>
          </div>
        </div>
      ) : (
        <div>
          <QrReader
            delay={300}
            onError={(error) => setErrorMessage(error)}
            onScan={(data) => setBchAddress(data)}
            style={{ margin: "10px 0px" }}
          />
          <CustomButton
            className="secondary-button"
            onClick={setBchAddressAndReturn}
          >
            {intl.formatMessage({ id: "qrScanner.back" })}
          </CustomButton>
        </div>
      )}
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default QrScanner;
