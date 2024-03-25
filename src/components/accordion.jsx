import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ step, toggled, onShow }) => {
  return (
    <div className="flex flex-col items-start p-7 bg-gradient-to-br from-gray-200 to-gray-300">
      <button
        id={step.title}
        onClick={onShow}
        className={`w-full flex items-center justify-between text-black py-2`}
      >
        <p className="text-xl font-medium w-full text-center lg:text-left">
          {step.title}
        </p>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <div
        className={`overflow-hidden text-black w-full ${
          toggled
            ? "max-h-[60rem] p-4 bg-white"
            : "max-h-0 px-4 pt-0 bg-gray-200"
        } transition-all duration-300 ease-in }`}
      >
        <p className="text-lg">{step.content}</p>
        <ul className="list-disc">
          {step.list &&
            step.list.map((item, index) => (
              <li key={index} className="ml-3 text-justify">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
