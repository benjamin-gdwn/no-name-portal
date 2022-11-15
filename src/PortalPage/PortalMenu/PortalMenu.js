import Button from "../../Reusable/Button";

const PortalMenu = () => {
  const claims = [
    {
      id: "1",
      title: "Damaged Screen",
      status: "Reviewing Claim"
    },
    {
      id: "2",
      title: "Damaged Screen",
      status: "Reviewing Claim"
    },
    {
      id: "3",
      title: "Damaged Screen",
      status: "Reviewing Claim"
    },
    {
      id: "4",
      title: "Damaged Screen",
      status: "Reviewing Claim"
    }
  ];
  return (
    <ul>
      {claims.map((claim) => (
        <li key={claim.id}>
          {claim.title} {claim.status}
          <Button name="cancel claim" />
        </li>
      ))}
    </ul>
  );
};

export default PortalMenu;
