import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ step, toggled, onShow, index }) => {
  return (
    <div className="flex flex-col items-start p-7 bg-gradient-to-br from-gray-200 to-gray-300">
      <button
        id={step.title}
        onClick={onShow}
        className={`w-full flex items-center justify-between text-black py-2`}
      >
        <span className="font-serif mr-4 text-lg lg:text-5xl font-semibold w-20 lg:w-24 text-gray-50 tracking-tight overflow-hidden text-left">
          {index + 1}
        </span>
        <p className="text-xl font-semibold w-full text-center lg:text-left">
          {step.title}
        </p>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <div
        className={`overflow-hidden text-black font-medium w-full ${
          toggled ? "max-h-max p-4 bg-white" : "max-h-0 px-4 pt-0 bg-gray-200"
        } transition-all duration-300 ease-in }`}
      >
        <p className="mt-3 text-lg text-justify">{step.content}</p>
        <ul className="mt-3 list-disc">
          {step.list &&
            step.list.map((item, index) => (
              <li key={index} className="ml-3 text-justify">
                {item}
              </li>
            ))}
        </ul>
        <p className={step.note ? "mt-3 text-lg text-justify block" : "hidden"}>
          {step.note}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
