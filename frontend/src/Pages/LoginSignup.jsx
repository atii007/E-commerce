import React, { useContext, useState } from "react";
import { Box, Modal } from "@mui/material";
import styles from "../Pages/CSS/LoginSignup.module.css";
import CustomButton from "../Components/sharedComponent/CustomButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../Context/Context";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState("Log in");

  const { open, handleClose } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const LoginAction = async () => {
    let responseData;

    const updatedFormData = {
      email: formData.email,
      password: formData.password,
    };

    if (!updatedFormData.email) {
      toast.error("Email Required!");
    } else if (!updatedFormData.password) {
      toast.error("Password Required!");
    } else {
      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);

        toast.success("Welcome");
        handleClose();
        navigate("/");
      } else {
        toast.error(responseData.errors);
      }
    }
  };
  const SignupAction = async () => {
    let responseData;
    if (!formData.username) {
      toast.error("Username Required!");
    } else if (!formData.email) {
      toast.error("Email Required!");
    } else if (!formData.password) {
      toast.error("Password Required");
    } else {
      await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        navigate("/");
        toast.success("Succesfully signed up");
        handleClose();
      } else {
        toast.error(responseData.errors);
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.loginContainer}>
        <h1>{loginState}</h1>
        <Box className={styles.loginFields}>
          {loginState === "Sign Up" ? (
            <input
              type="text"
              name="username"
              onChange={changeHandler}
              value={formData.name}
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            id=""
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
            placeholder="Password"
            required
          />
        </Box>
        <CustomButton
          title="Continue"
          marginTop="15px"
          width="200px"
          height="50px"
          borderRadius="35px"
          onClick={loginState === "Log in" ? LoginAction : SignupAction}
        />
        {loginState === "Sign Up" ? (
          <p className={styles.loginLogin}>
            Already Have an Account?
            <span
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => setLoginState("Log in")}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className={styles.loginLogin}>
            Don't Have an Account ?
            <span
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => setLoginState("Sign Up")}
            >
              Signup Here
            </span>
          </p>
        )}
      </Box>
    </Modal>
  );
};

export default LoginSignup;
