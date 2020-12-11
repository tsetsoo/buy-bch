import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import Spinner from "../spinner/spinner.component";
import { resetOrder } from "../../util/util";

import { useIntl } from "react-intl";

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
        {props.bgnAmount ? (
          <p>
            {intl.formatMessage(
              { id: "currentOrder.amount" },
              { amount: props.bgnAmount }
            )}
            <CustomButton className="small-button" onClick={resetOrder}>
              {intl.formatMessage({ id: "currentOrder.reset" })}
            </CustomButton>
          </p>
        ) : null}
        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
      </div>
    );
  };
export default FormContainer;
