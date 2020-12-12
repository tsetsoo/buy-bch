import React, { useReducer } from "react";

import CustomButton from "../custom-button/custom-button.component";
import { useIntl } from "react-intl";
import { resetOrder } from "../../util/util";

import "./payment-pending.styles.scss";
import "../form.styles.scss";

const PaymentPending = ({ paymentUrl, bgnAmount }) => {
  const [, forceUpdate] = useReducer((x) => (x === 0 ? x + 1 : x - 1), 0);

  const intl = useIntl();

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
          {intl.formatMessage({ id: "payment.payHere" }, { amount: bgnAmount })}
        </CustomButton>
        {localStorage.getItem("new-order-button-visible") ? (
          <CustomButton className="secondary-button" onClick={resetOrder}>
            {intl.formatMessage({ id: "payment.newOrder" })}
          </CustomButton>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentPending;
