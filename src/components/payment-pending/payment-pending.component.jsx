import React, { useReducer } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useIntl } from "react-intl";

import "./payment-pending.styles.scss";
import "../form.styles.scss";

const PaymentPending = ({ paymentUrl }) => {
  const [, forceUpdate] = useReducer((x) => (x === 0 ? x + 1 : x - 1), 0);

  const intl = useIntl();

  const newOrder = () => {
    localStorage.clear();
    window.location.reload();
  };

  const payHere = () => {
    window.open(paymentUrl, "_blank");
    localStorage.setItem("new-order-button-visible", true);
    setTimeout(forceUpdate, 1000);
  };

  return (
    <div className="form-container">
      <p>{intl.formatMessage({ id: "payment.thankYou" })}</p>
      <div className="buttons">
        <CustomButton onClick={payHere}>
          {intl.formatMessage({ id: "payment.payHere" })}
        </CustomButton>
        {localStorage.getItem("new-order-button-visible") ? (
          <CustomButton onClick={newOrder}>
            {intl.formatMessage({ id: "payment.newOrder" })}
          </CustomButton>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentPending;
