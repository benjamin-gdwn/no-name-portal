import Header from "./Header.js";
import PortalMenu from "./PortalMenu/PortalMenu.js";
const PortalPage = (props) => {
  console.log(props);
  return (
    <div>
      <Header
        userName={props.userName}
        loggedInHandler={props.loggedInHandler}
      />
      <p>Welcome To Your Claims Homepage</p>
      <PortalMenu />
    </div>
  );
};

export default PortalPage;
