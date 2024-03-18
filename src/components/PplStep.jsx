import { FaPlus, FaMinus } from "react-icons/fa6";

const PplStep = ({ step, toggled, onShow }) => {
  return (
    <div className="flex flex-col items-start pl-3 bg-gradient-to-br from-gray-200 to-gray-300">
      <button
        id={step.title}
        onClick={onShow}
        className={`w-full flex items-center justify-between text-black py-2 whitespace-nowrap`}
      >
        <p>{step.title}</p>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <ul
        className={`overflow-hidden text-black ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out }`}
      >
        <li className="m-4">
          <p>{step.content}</p>
        </li>
      </ul>
    </div>
  );
};

export default PplStep;
