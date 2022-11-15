import Button from "../Reusable/Button.js";

const LoginForm = (props) => {
  const setLoggedInHandler = (e) => {
    e.preventDefault();
    props.setLoggedIn(true);
  };
  return (
    <form>
      <label for="username">Username</label>
      <input type="text" name="username" />
      <label for="password">Password</label>
      <input type="password" name="password" />
      <button name="Login" type="submit" onClick={setLoggedInHandler}></button>
    </form>
  );
};

export default LoginForm;
