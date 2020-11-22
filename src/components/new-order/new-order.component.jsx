import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { newOrder } from "../../api/buy-bch.api";

import "./new-order.styles.scss";

class NewOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      bchAddress: "",
      bgn: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const order = await newOrder(
      this.state.bgn,
      this.state.bchAddress,
      this.state.email
    );
    console.log(order);
    localStorage.setItem("orderId", order["id"]);
    this.props.setOrder(order);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="new-order">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="bchAddress"
            type="bchAddress"
            handleChange={this.handleChange}
            value={this.state.bchAddress}
            label="bchAddress"
            required
          />
          <FormInput
            name="bgn"
            type="number"
            step="0.001"
            handleChange={this.handleChange}
            value={this.state.bgn}
            label="BGN"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Buy BCH </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default NewOrder;
