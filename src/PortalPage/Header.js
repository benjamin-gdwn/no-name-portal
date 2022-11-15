const Header = (props) => {
  const logoutHandler = () => {
    props.loggedInHandler(false);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Latest Communications</li>
          <li>Contact Us</li>
          <li>New Claims</li>
          <button name="Logout" onClick={logoutHandler}>
            Logout
          </button>
        </ul>
      </nav>
      <h2>NoName Portal</h2>
      {/* add in username at the end of welcome */}
    </header>
  );
};

export default Header;
