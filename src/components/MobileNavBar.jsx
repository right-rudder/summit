import { flightPrograms, resources, about } from "../consts.ts";
import MobileNavLink from "./MobileNavLink.jsx";
import { useState } from "react";

const MobileNavBar = ({ pathname }) => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <>
      <MobileNavLink
        menuItem={flightPrograms}
        pathname={pathname}
        toggled={flightPrograms.name === open}
        onShow={handleClick}
      />
      <MobileNavLink
        menuItem={resources}
        pathname={pathname}
        toggled={resources.name === open}
        onShow={handleClick}
      />
      <MobileNavLink
        menuItem={about}
        pathname={pathname}
        toggled={about.name === open}
        onShow={handleClick}
      />
    </>
  );
};

export default MobileNavBar;
