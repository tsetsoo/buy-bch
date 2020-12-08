import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";

import { useIntl } from "react-intl";
import QrReader from "react-qr-reader";

import "../form.styles.scss";

function QrScanner({ setBchState }) {
  const [bchAddress, setBchAddress] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const intl = useIntl();

  return (
    <div className="form-container">
      {bchAddress ? (
        <div>
          <p>{intl.formatMessage({ id: "qrScanner.confirmationMessage" })}</p>
          <p>{bchAddress}</p>
          <div className="buttons">
            <CustomButton
              onClick={(e) => {
                e.preventDefault();
                setBchState({ bchAddress, showQr: false });
              }}
            >
              {intl.formatMessage({ id: "qrScanner.submit" })}
            </CustomButton>
            <CustomButton
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
        <QrReader
          delay={300}
          onError={(error) => setErrorMessage(error)}
          onScan={(data) => setBchAddress(data)}
        />
      )}
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </div>
  );
}

export default QrScanner;
