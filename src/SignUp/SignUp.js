import { useState } from "react";
import PortalPage from "../PortalPage/PortalPage";
import "./SignUp.css";

const SignUp = (props) => {
  const [surnameIsValid, setSurnameIsValid] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState("");
  const [customerId, setCustomerIdIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [userName, setUserName] = useState();
  const createUser = (e) => {
    e.preventDefault();
    if (
      firstNameIsValid.length > 2 &&
      surnameIsValid.length > 2 &&
      passwordMatches === true
    ) {
      props.setLoggedIn(true);
      console.log(firstNameIsValid);
      setUserName(firstNameIsValid.toUpperCase());
      closeSignUp();
    }
  };

  const passwordMatchHandler = (e) => {
    if (e.currentTarget.value === passwordIsValid) {
      setPasswordMatches(true);
      setFirstNameIsValid(firstNameIsValid);
      setSurnameIsValid(surnameIsValid);
    } else {
      setPasswordMatches(false);
    }
  };

  const passwordHandler = (e) => {
    if (e.currentTarget.value.length > 7) {
      setPasswordIsValid(e.currentTarget.value);
    }
  };

  const customerIdHandler = (e) => {
    if (e.currentTarget.value.length > 8) {
      setCustomerIdIsValid(true);
    } else {
      setCustomerIdIsValid(false);
    }
  };

  const surnameHandler = (e) => {
    if (e.currentTarget.value.length > 2) {
      setSurnameIsValid(e.currentTarget.value);
      e.currentTarget.classList.remove("invalid");
    } else {
      e.currentTarget.classList.add("invalid");
    }
  };

  const FirstNameHandler = (e) => {
    if (e.currentTarget.value.length > 2) {
      setFirstNameIsValid(e.currentTarget.value);
      e.currentTarget.classList.remove("invalid");
    } else {
      e.currentTarget.classList.add("invalid");
    }
  };

  const closeSignUp = () => {
    props.closeShowSignupForm(true);
  };

  return (
    <form>
      <label for="first-name">First Name</label>
      <input
        onChange={FirstNameHandler}
        type="text"
        name="first-name"
        // value={firstNameIsValid}
      />
      <label for="last-name">Surname</label>
      <input
        onBlur={surnameHandler}
        type="text"
        name="last-name"
        // value={surnameIsValid}
      />

      <label for="customer-number">Customer ID</label>
      <input
        className={!customerId ? "invalid" : ""}
        onBlur={customerIdHandler}
        type="text"
        name="customer-id"
      />

      <label for="password">Password</label>
      <input onBlur={passwordHandler} type="password" name="password" />

      <label for="confirm-password">Re-Enter Password</label>
      <input
        className={!passwordMatches ? "invalid" : ""}
        onBlur={passwordMatchHandler}
        type="password"
        name="confirm-password"
      />

      <button onClick={createUser} type="submit">
        SignUp
      </button>
      <button onClick={closeSignUp}>Close</button>
      {!customerId < 2 && (
        <p>
          If you do not have a Customer ID please complete the form and we will
          be in touch
        </p>
      )}
      {!passwordMatches && <p>Passwords do not match</p>}
      {userName && <PortalPage username={userName} />}
    </form>
  );
};

export default SignUp;
