import axios from "axios";

export const getRate = async (bgnAmount) => {
  const response = await axios.get("/bchbgn?amount_bgn=" + bgnAmount);
  return response.data["amount_bch"];
};

export const getOrder = async (orderId) => {
  const response = await axios.get("/order/" + orderId);
  return response.data;
};

export const newOrder = async (bgnAmount, bchAddress, email) => {
  const response = await axios.post("/order", {
    bgn_amount: bgnAmount,
    bch_addr: bchAddress,
    email,
  });
  return response.data;
};

export const verifyPhone = async (orderId, phone) => {
  await axios.post("/order/" + orderId + "/id/phone", {
    phone,
  });
};

export const verifyPhoneCode = async (orderId, phone, secretCode) => {
  const response = await axios.post("/order/" + orderId + "/id/phone", {
    phone,
    secret_code: secretCode,
  });
  return response.data;
};

// export const verifyPhoneCode = async (orderId, phone, secretCode) => {
//   await axios.post("/order/" + orderId + "/id/phone", {
//     phone,
//     secret_code: secretCode,
//   });
// };
