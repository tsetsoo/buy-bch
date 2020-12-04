import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getRate = async (bgnAmount) => {
  try {
    const response = await axios.get(
      `${backendUrl}/rate/bchbgn?amount_bgn=${bgnAmount}`
    );
    return response.data["amount_bch"];
  } catch (err) {
    return { errorId: "bchapi.error.general" };
  }
};

export const getOrder = async (orderId) => {
  try {
    const response = await axios.get(`${backendUrl}/order/${orderId}`);
    return response.data;
  } catch (err) {
    return { errorId: "bchapi.error.general" };
  }
};

export const newOrder = async (bgnAmount, bchAddress, email) => {
  try {
    const response = await axios.post(`${backendUrl}/order`, {
      bgn_amount: bgnAmount,
      bch_addr: bchAddress,
      email,
    });
    return { order: response.data };
  } catch (err) {
    return errorIdFromErrorForStatus(err, 503, "bchapi.error.notEnoughBch");
  }
};

export const verifyPhone = async (orderId, phone) => {
  try {
    await axios.post(`${backendUrl}/order/${orderId}/id/phone`, {
      phone,
    });
  } catch (err) {
    return errorIdFromErrorForStatus(err, 400, "bchapi.error.phoneNumber");
  }
};

export const verifyPhoneCode = async (orderId, phone, secretCode) => {
  try {
    const response = await axios.post(
      `${backendUrl}/order/${orderId}/id/phone`,
      {
        phone,
        secret_code: secretCode,
      }
    );
    return { order: response.data };
  } catch (err) {
    return errorIdFromErrorForStatus(err, 403, "bchapi.error.validationCode");
  }
};

export const verifyPhoto = async (orderId, photo, photoUrl) => {
  try {
    const response = await axios.post(
      `${backendUrl}/order/${orderId}/id/${photoUrl}`,
      photo,
      {
        headers: {
          "Content-Type": photo.type,
        },
      }
    );
    return { order: response.data };
  } catch (err) {
    return errorIdFromErrorForStatus(err, 400, "bchapi.error.photoFormat");
  }
};

const errorIdFromErrorForStatus = (err, statusCode, customErrorId) => {
  let errorId;
  if (err.response && err.response.status === statusCode) {
    errorId = customErrorId;
  } else {
    errorId = "bchapi.error.general";
  }
  return { errorId };
};
