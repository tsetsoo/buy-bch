import axios from "axios";

export const getRate = async (bgnAmount) => {
  const response = await axios.get("/rate/bchbgn?amount_bgn=" + bgnAmount);
  return response.data["amount_bch"];
};

export const getOrder = async (orderId) => {
  try {
    const response = await axios.get("/order/" + orderId);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const newOrder = async (bgnAmount, bchAddress, email) => {
  try {
    const response = await axios.post("/order", {
      bgn_amount: bgnAmount,
      bch_addr: bchAddress,
      email,
    });
    return { order: response.data };
  } catch (err) {
    return errorMessageFromErrorForStatus(
      err,
      503,
      "Insuffiecient BCH reserves in the service to fulfill the order. Please decrease the amount or try again later"
    );
  }
};

export const verifyPhone = async (orderId, phone) => {
  try {
    await axios.post("/order/" + orderId + "/id/phone", {
      phone,
    });
  } catch (err) {
    return errorMessageFromErrorForStatus(
      err,
      400,
      "Phone number is not formed correctly. Please follow the example: +359888123456"
    );
  }
};

export const verifyPhoneCode = async (orderId, phone, secretCode) => {
  try {
    const response = await axios.post("/order/" + orderId + "/id/phone", {
      phone,
      secret_code: secretCode,
    });
    return { order: response.data };
  } catch (err) {
    return errorMessageFromErrorForStatus(
      err,
      403,
      "Validation code is invalid. Please try again."
    );
  }
};

export const verifyPhoto = async (orderId, photo, photoUrl) => {
  try {
    const response = await axios.post(
      "/order/" + orderId + "/id/" + photoUrl,
      photo,
      {
        headers: {
          "Content-Type": photo.type,
        },
      }
    );
    return { order: response.data };
  } catch (err) {
    return errorMessageFromErrorForStatus(
      err,
      400,
      "Photo is of wrong format. Please try again."
    );
  }
};

const errorMessageFromErrorForStatus = (
  err,
  statusCode,
  customErrorMessage
) => {
  let errorMessage;
  if (err.response && err.response.status === statusCode) {
    errorMessage = customErrorMessage;
  } else {
    errorMessage = "Unexpected error. Please contact system administrator.";
  }
  return { errorMessage };
};
