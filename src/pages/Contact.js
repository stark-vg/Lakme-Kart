import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import React, { Component } from "react";
import ReactFormInputValidation from "react-form-input-validation";

const Container = styled.div`
  width: 100vw;
  height: 88vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://images.pexels.com/photos/4612124/pexels-photo-4612124.jpeg?cs=srgb&dl=pexels-cottonbro-4612124.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 36%;
  padding: 15px;
  background-color: white;
  ${mobile({ width: "75%" })}
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: cyan;
  background-color: black;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Textarea = styled.input`
  flex: 1;
  min-width: 98%;
  margin: 20px 20px 0px 2px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 35%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default class Validations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        firstname: "",
        lastname: "",
        email: "",
        phone_number: "",
      },
      errors: {},
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required",
      firstname: "required",
      lastname: "required",
      email: "required|email",
      phone_number: "required|numeric|digits_between:10,12",
    });
    this.form.onformsubmit = (fields) => {
      // Do your ajax calls here.
    };
  }
  handleClick = () => {
    console.log("this is:", this.state);
  };

  render() {
    return (
      <>
        <Announcement />
        <Navbar />
        <Container>
          <Wrapper>
            <Title className=" py-2">CONTACT US</Title>
            <div className="App">
              <form onSubmit={this.form.handleSubmit}>
                <div>
               <div>
                  <label>
                    Name
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.name}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.name ? this.state.errors.name : ""}
                  </label>
                  </div>

                  <div>
                  <label>
                    FirstName
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="firstname"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.firstname}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.firstname
                      ? this.state.errors.firstname
                      : ""}
                  </label>
                  </div>

                  <div>
                  <label>
                    LastName
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="lastname"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.lastname}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.lastname
                      ? this.state.errors.lastname
                      : ""}
                  </label>
    
                  </div>
                  <div>
                  <label>
                    Email
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.email}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.email ? this.state.errors.email : ""}
                  </label>
                  </div>

                <p>
                  <label>
                    Phone
                    <input
                      className="form-control form-control-lg"
                      type="tel"
                      name="phone_number"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.phone_number}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.phone_number
                      ? this.state.errors.phone_number
                      : ""}
                  </label>
                </p>
                </div>
                <Agreement>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>

                <p>
                  {" "}
                  <Button>
                    <button
                      id="sendMessageButton"
                      className="sim-btn hvr-rectangle-out"
                      data-text="Send Message"
                      type="submit"
                      align="center"
                      onClick={this.handleClick}
                    >
                      Submit
                    </button>{" "}
                  </Button>
                </p>
              </form>
            </div>
          </Wrapper>
        </Container>
      </>
    );
  }
}
