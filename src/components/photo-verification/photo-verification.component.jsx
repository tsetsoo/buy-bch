import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "../new-order/new-order.styles.scss";

class PhotoVerification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      photoUrl: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({ photo: img, photoUrl: URL.createObjectURL(img) });
    }
  };

  render() {
    return (
      <div className="new-order">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="photo"
            type="file"
            handleChange={this.handleChange}
            required
          />
          <img alt="To upload" src={this.state.photoUrl} />
          <div className="buttons">
            <CustomButton type="submit"> UPLOAD </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default PhotoVerification;
