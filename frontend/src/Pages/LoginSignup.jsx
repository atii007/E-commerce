import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import styles from "../Pages/CSS/LoginSignup.module.css";
import CustomButton from "../Components/sharedComponent/CustomButton";
import { useAuth } from "../context/authProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  openLoginModal,
  setFormData,
} from "../states-management/actions/actions";

const LoginSignup = () => {
  const [loginState, setLoginState] = useState("Log in");

  const { LoginAction, SignupAction } = useAuth();

  const open = useSelector((state) => state.open);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      setFormData({
        ...formData,
        [name]: value,
      })
    );
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(openLoginModal(false))}
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
