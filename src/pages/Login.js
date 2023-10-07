import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import React, { Component } from "react";
import ReactFormInputValidation from "react-form-input-validation";

const Container = styled.div`
  width: 100vw;
  height: 88vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px 10px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        username: "",
        password: "",
        email: "",
        phone_number: "",
      },
      errors: {},
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required",
      username: "required",
      password: "required",
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
            <Title className=" py-2">SIGN IN</Title>
            <div className="App">
              <form onSubmit={this.form.handleSubmit}>
                <div>
                  <div>
                    <label>
                      Username
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onBlur={this.form.handleBlurEvent}
                        onChange={this.form.handleChangeEvent}
                        value={this.state.fields.username}
                      />
                    </label>
                    <label className="error">
                      {this.state.errors.username
                        ? this.state.errors.username
                        : ""}
                    </label>
                  </div>

                  <div>
                    <label>
                      Password
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="password"
                        placeholder="Password"
                        onBlur={this.form.handleBlurEvent}
                        onChange={this.form.handleChangeEvent}
                        value={this.state.fields.password}
                      />
                    </label>
                    <label className="error">
                      {this.state.errors.password
                        ? this.state.errors.password
                        : ""}
                    </label>
                  </div>
                </div>
                <Agreement>
                  DO YOU REMEMBER THE PASSWORD <b>CREATE NEW ACCOUNT</b>
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
