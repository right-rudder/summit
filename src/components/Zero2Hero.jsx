import { useState } from "react";
import PplStep from "./PplStep";
import { pplProcess } from "../data/pplProcess";

const Zero2Hero = () => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <div className="w-full px-2 flex flex-col gap-2 ">
      {pplProcess.map((step) => (
        <PplStep
          key={step.title}
          step={step}
          toggled={step.title === open}
          onShow={handleClick}
        />
      ))}
    </div>
  );
};

export default Zero2Hero;
