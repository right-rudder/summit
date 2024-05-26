import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ faq, toggled, onShow, index }) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-start p-7 bg-gradient-to-br from-gray-200 to-gray-300">
        <div
          id={faq.title}
          onClick={onShow}
          className="absolute z-10 top-0 left-0 w-full h-32 cursor-pointer"
        ></div>
        <div
          className={`w-full h-full flex items-center justify-between text-black py-2`}
        >
          <span className="font-mono mr-4 text-lg lg:text-5xl font-semibold w-20 lg:w-24 text-gray-800 tracking-tight overflow-hidden text-left">
            {index + 1}
          </span>
          <p className="text-base lg:text-xl font-semibold w-full text-center lg:text-left">
            {faq.title}
          </p>
          {toggled ? (
            <FaMinus className="mr-3 pointer-events-none" />
          ) : (
            <FaPlus className="mr-3 pointer-events-none" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden px-9 text-black font-medium w-full ${
          toggled
            ? "max-h-max p-9 bg-white border-2 border-gray-200 text-black"
            : "max-h-0 bg-gray-100"
        } transition-all duration-700 ease-in-out`}
      >
        {faq.content && (
          <p
            className="mt-2 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.content }}
          ></p>
        )}
        {faq.paragraph1 && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.paragraph1 }}
          ></p>
        )}
        {faq.paragraph2 && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.paragraph2 }}
          ></p>
        )}
        {faq.paragraph3 && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.paragraph3 }}
          ></p>
        )}
        {faq.oList && (
          <ol className="mt-3 list-decimal">
            {faq.oList.map((item, index) => (
              <li key={index} className="ml-3 text-justify">
                {item}
              </li>
            ))}
          </ol>
        )}
        {faq.paragraph4 && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.paragraph4 }}
          ></p>
        )}

        {faq.list && (
          <ul className="mt-3 list-disc">
            {faq.list.map((item, index) => (
              <li key={index} className="ml-3 text-justify">
                {item}
              </li>
            ))}
          </ul>
        )}
        {faq.paragraph5 && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.paragraph5 }}
          ></p>
        )}
        {faq.list2 && (
          <ul className="mt-3 list-disc">
            {faq.list2.map((item2, index) => (
              <li key={index} className="ml-3 text-justify">
                {item2}
              </li>
            ))}
          </ul>
        )}
        {faq.note && (
          <p
            className="mt-4 text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: faq.note }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
