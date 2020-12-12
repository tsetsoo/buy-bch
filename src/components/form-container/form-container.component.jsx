import React, { useState } from "react";

import Spinner from "../spinner/spinner.component";

import { useIntl } from "react-intl";

import "./form-container.styles.scss";

const FormContainer = (WrappedForm) =>
  function Wrapper({ children, ...props }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const intl = useIntl();

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="form-container">
        {props.bgnAmount ? (
          <p className="current-order-text">
            {intl.formatMessage(
              { id: "currentOrder.amount" },
              { amount: props.bgnAmount }
            )}
          </p>
        ) : null}
        <WrappedForm
          setErrorMessage={(errorId) => {
            errorId
              ? setErrorMessage(intl.formatMessage({ id: errorId }))
              : setErrorMessage("");
          }}
          setLoading={setLoading}
          {...props}
        >
          {children}
        </WrappedForm>
        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
      </div>
    );
  };
export default FormContainer;
