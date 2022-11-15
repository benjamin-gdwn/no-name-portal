import PortalPage from "../PortalPage/PortalPage.js";
import LoginForm from "../Reusable/LoginForm.js";
import { useState } from "react";
import SignUp from "../SignUp/SignUp.js";
const Homepage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signupForm, showSignUpForm] = useState(true);
  const signupFormHandler = () => {
    showSignUpForm(false);
  };
  return (
    <div>
      <h1>NoName Portal</h1>
      {!loggedIn && <p>Welcome to the portal Login or SignUp below!</p>}
      {signupForm && !loggedIn && <LoginForm setLoggedIn={setLoggedIn} />}
      {signupForm && !loggedIn && (
        <button onClick={signupFormHandler}>Sign up</button>
      )}
      {!signupForm && (
        <SignUp
          setLoggedIn={setLoggedIn}
          closeShowSignupForm={showSignUpForm}
        />
      )}
      {loggedIn && <PortalPage loggedInHandler={setLoggedIn} />}
    </div>
  );
};

export default Homepage;
