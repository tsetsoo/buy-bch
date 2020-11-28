import React, { useReducer } from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./payment-pending.styles.scss";
import "../form.styles.scss";

const PaymentPending = ({ paymentUrl }) => {
  const [, forceUpdate] = useReducer((x) => (x === 0 ? x + 1 : x - 1), 0);

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
    <div className="new-order">
      <p>Thank you for your order</p>
      <div className="buttons">
        <CustomButton onClick={payHere}>Pay here</CustomButton>
        {localStorage.getItem("new-order-button-visible") ? (
          <CustomButton onClick={newOrder}>New Order</CustomButton>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentPending;
