import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./payment-pending.styles.scss";

function PaymentPending({ paymentUrl }) {
  const newOrder = () => {
    localStorage.removeItem("orderId");
    window.location.reload();
  };

  return (
    <div className="thankYouWrapper">
      <p>Thank you for your order</p>
      <div className="buttons">
        <CustomButton onClick={() => window.open(paymentUrl, "_blank")}>
          Pay here
        </CustomButton>
        <CustomButton onClick={newOrder}>New Order</CustomButton>
      </div>
    </div>
  );
}

export default PaymentPending;
