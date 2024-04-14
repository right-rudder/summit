import { useState } from "react";
import FAQs from "./FAQs";
import { GeneralFAQs } from "../data/generalFAQs1";
import { privatepilotFAQs } from "../data/privatePilotFAQs";
import { instrumentFAQs } from "../data/instrumentFAQs";
import { bundleFAQs } from "../data/bundleFAQs";
import { commercialPilotFAQs } from "../data/commercialPilotFAQs";

const FAQsTabs = () => {
  const options = [
    "General",
    "Private Pilot",
    "Instrument Rating",
    "Pilot + Instrument Bundle",
    "Commercial Pilot",
  ];

  const [currentTab, setCurrentTab] = useState("General");

  const General = <FAQs faqs={GeneralFAQs} type="General" />;
  const PrivatePilot = <FAQs faqs={privatepilotFAQs} type="Private Pilot" />;
  const Instrument = <FAQs faqs={instrumentFAQs} type="Instrument Rating" />;
  const Bundle = <FAQs faqs={bundleFAQs} type="Pilot + Instrument Bundle" />;
  const Commercial = (
    <FAQs faqs={commercialPilotFAQs} type="Commercial Pilot" />
  );

  return (
    <section id="frecuently-asked-questions">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-main-red focus:ring-main-red"
          defaultValue={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {options.map((option) => (
            <div
              className={`${currentTab === option ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
              onClick={() => setCurrentTab(option)}
            >
              <span>{option}</span>
              <span
                aria-hidden="true"
                className={`${currentTab === option ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
              ></span>
            </div>
          ))}
        </div>
      </div>

      {currentTab === "General" && General}
      {currentTab === "Private Pilot" && PrivatePilot}
      {currentTab === "Instrument Rating" && Instrument}
      {currentTab === "Pilot + Instrument Bundle" && Bundle}
      {currentTab === "Commercial Pilot" && Commercial}
    </section>
  );
};

export default FAQsTabs;
