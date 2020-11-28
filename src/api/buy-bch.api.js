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
    let errorMessage;
    if (err.response && err.response.status === 503) {
      errorMessage =
        "Insuffiecient BCH reserves in the service to fulfill the order. Please decrease the amount or try again later";
    } else {
      errorMessage = "Unexpected error. Please contanct system administrator.";
    }
    return { errorMessage };
  }
};

export const verifyPhone = async (orderId, phone) => {
  try {
    await axios.post("/order/" + orderId + "/id/phone", {
      phone,
    });
  } catch (err) {
    let errorMessage;
    if (err.response && err.response.status === 400) {
      errorMessage =
        "Phone number is not formed correctly. Please follow the example: +359888123456";
    } else {
      errorMessage = "Unexpected error. Please contanct system administrator.";
    }
    return { errorMessage };
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
    let errorMessage;
    if (err.response && err.response.status === 403) {
      errorMessage = "Validation code is invalid. Please try again.";
    } else {
      errorMessage = "Unexpected error. Please contanct system administrator.";
    }
    return { errorMessage };
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
    let errorMessage;
    if (err.response && err.response.status === 400) {
      errorMessage = "Photo is of wrong format. Please try again.";
    } else {
      errorMessage = "Unexpected error. Please contanct system administrator.";
    }
    return { errorMessage };
  }
};
