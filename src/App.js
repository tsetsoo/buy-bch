import { useEffect, useState } from "react";

import { getOrder } from "./api/buy-bch.api";

import "./App.scss";
import Header from "./components/header/header.component";
import NewOrder from "./components/new-order/new-order.component";
import PaymentPending from "./components/payment-pending/payment-pending.component";
import PhoneVerification from "./components/phone-verification/phone-verification.component";
import PhotoVerification from "./components/photo-verification/photo-verification.component";

function App() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    const orderId = localStorage.getItem("orderId");
    if (orderId) {
      async function fetchOrder() {
        const retrievedOrder = await getOrder(orderId);
        setOrder(retrievedOrder);
      }

      fetchOrder();
    }
  }, []);

  const renderSwitch = () => {
    if (order["status"] === "pending_payment") {
      return (
        <PaymentPending
          paymentUrl={order["payment_url"]}
          bgnAmount={order["bgn_amount"]}
        />
      );
    }

    if (order["status"] === "pending_id") {
      if (order["id_pending"] === "phone") {
        return (
          <PhoneVerification
            orderId={order["id"]}
            setOrder={setOrder}
            bgnAmount={order["bgn_amount"]}
          />
        );
      } else if (
        order["id_pending"] === "id_photo" ||
        order["id_pending"] === "face_photo" ||
        order["id_pending"] === "declaration_form"
      ) {
        return (
          <PhotoVerification
            orderId={order["id"]}
            setOrder={setOrder}
            photoSuffix={order["id_pending"]}
            declarationFormUrl={order["id_ext_url"]}
            bgnAmount={order["bgn_amount"]}
          />
        );
      }
    }
    return <NewOrder setOrder={setOrder} />;
  };

  return (
    <div className="App">
      <Header />
      <div className="contents">{renderSwitch()}</div>
    </div>
  );
}

export default App;
