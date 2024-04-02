import { useState } from "react";
import FAQs from "./FAQs";
import { stratusFAQs } from "../data/stratusFAQs";
import { ftfFAQs } from "../data/ftfFAQs";
import { aopaFAQs } from "../data/aopaFAQs";

const FinancingTabs = () => {
  const [currentTab, setCurrentTab] = useState("Stratus Financial");

  const stratusFinancial = (
    <>
      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
            <div>
              <h2 className="text-5xl font-semibold text-center tracking-tight">
                Finance with Stratus Financial
              </h2>
              <h3 className="pt-3 text-2xl text-center">
                Leverage financial support here
              </h3>
            </div>
            <div className="bg-white p-8 rounded">
              <img
                src="/img/financing/stratusLogo.webp"
                alt="Stratus Financial logo"
                className="h-16 md:h-20"
              />
            </div>
          </div>
          <div className="tracking-wider">
            <p className="pt-5">
              Stratus Financial was founded by FAA Certificated Flight and
              Ground Instructors passionate about helping others achieve their
              aviation dreams.
            </p>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <p className="pt-5 font-semibold text-center lg:text-left text-lg">
                  Student Requirements
                </p>
                <ul className="mt-4 list-disc pl-10">
                  <li>Must be a US Citizen or Permanent Resident*</li>
                  <li>Paystubs for the past two (2) months</li>
                  <li>Bank Statements for the past two (2) months</li>
                  <li>Driver's License</li>
                  <li>
                    Name & contact number of employer (for employee
                    verification)
                  </li>
                  <li>1st or 2nd class Medical Certificate</li>
                  <li>Co-borrower Recommended</li>
                  <li>Pilot Certificate, if applicable</li>
                  <li>Subject to Credit Check and Underwriting</li>
                </ul>
                <p className="pt-5 italic">
                  *If non-US citizen, TSA verification is required.
                </p>
              </div>
              <div className="flex-1">
                <p className="mt-4 md:pt-5 font-semibold text-center lg:text-left text-lg">
                  Loan Process
                </p>
                <ol className="pl-10 list-decimal">
                  <li>Application</li>
                  <li>Processing</li>
                  <li>Underwriting</li>
                  <li>Approval</li>
                  <li>Funding</li>
                  <li>Pilot Training</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQs faqs={stratusFAQs} type="Stratus Financial" />
    </>
  );

  const flightTrainingFinance = (
    <>
      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
            <div>
              <h2 className="text-5xl font-semibold text-center tracking-tight">
                Finance with Flight Training Finance LLC
              </h2>
              <h3 className="pt-3 text-2xl text-center">
                Don’t let finances be the limiting factor
              </h3>
            </div>
            <div className="bg-white p-8 rounded">
              <img
                src="/img/financing/flightTrainingFinanceLogo.webp"
                alt="Flight Training Finance logo"
                className="h-12 sm:h-16 md:h-20"
              />
            </div>
          </div>
          <div className="tracking-wider">
            <p className="pt-5">
              Flight Training Finance will help you get in the air with
              affordable financing options for your flight training.
            </p>
            <p className="pt-5 font-semibold text-xl">
              Why Choose Flight Training Finance?
            </p>
            <ul className="list-disc pl-10 pt-5">
              <li>
                <strong>Personalized Solutions:</strong> We believe that every
                student's journey is unique. With Flight Training Finance,
                you'll have access to financing options customized to your
                individual needs and circumstances.
              </li>
              <li>
                <strong>Guidance Every Step of the Way:</strong> Our
                user-friendly Flight Training Finance Application walks you
                through the process, ensuring clarity and simplicity as you
                apply for financing.
              </li>
              <li>
                <strong>Flexible Payment Plans:</strong> Whether you're looking
                to spread out your payments or make a larger down payment, our
                Yellow Sheet calculation tool allows you to explore different
                payment scenarios, empowering you to find a plan that fits your
                budget.
              </li>
              <li>
                <strong>Transparent Terms:</strong> Rest assured that with the
                Retail Installment Contract, you'll have a clear understanding
                of the terms of your financing agreement, providing peace of
                mind as you pursue your dreams.
              </li>
            </ul>
            <p className="pt-5">
              If you are interested in getting started, please click{" "}
              <a
                href="https://www.flighttrainingfinancellc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 hover:underline text-blue-600 font-semibold"
              >
                here
              </a>{" "}
              to apply now.
            </p>
            <p className="pt-10 font-semibold text-xl">
              Partnering for Success
            </p>
            <p className="pt-5">
              Flight Training Finance will help you get in the air with
              affordable financing options for your flight training.
            </p>
            <p className="pt-10 font-semibold text-xl">Additional Resources</p>
            <ul className="list-disc pl-10">
              <li>
                <a
                  href="../../public/files/ftf-program-guide.pdf"
                  download="ftf-program-guide.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Program Guide
                </a>
              </li>
              <li>
                <a
                  href="../../public/files/ftf-brochure.pdf"
                  download="ftf-brochure.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  FTF Brochure
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FAQs faqs={ftfFAQs} type="Flight Training Finance" />
    </>
  );

  const aopa = (
    <>
      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 overflow-hidden">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
            <div>
              <h2 className="text-5xl font-semibold text-center tracking-tight">
                Finance with AOPA
              </h2>
              <h3 className="pt-3 text-2xl text-center">
                Don’t let finances limit your pilot aspirations
              </h3>
            </div>
            <div className="bg-white p-8 rounded">
              <img
                src="/img/financing/AOPALogo.webp"
                alt="AOPA logo"
                className="h-auto w-48 md:w-64 object-cover"
              />
            </div>
          </div>
          <div className="tracking-wider">
            <p className="pt-5">
              AOPA's financing program works directly with students to finance
              smaller scale training programs.
            </p>
          </div>
        </div>
      </section>
      <FAQs faqs={aopaFAQs} type="AOPA" />
    </>
  );

  return (
    <div>
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
          <option>Stratus Financial</option>
          <option>Flight Training Finance</option>
          <option>AOPA</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <div
            className={`${currentTab === "Stratus Financial" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Stratus Financial")}
          >
            <span>Stratus Financial</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Stratus Financial" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "Flight Training Finance" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Flight Training Finance")}
          >
            <span>Flight Training Finance</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Flight Training Finance" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "AOPA" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            aria-current="page"
            onClick={() => setCurrentTab("AOPA")}
          >
            <span>AOPA</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "AOPA" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
        </div>
      </div>

      {currentTab === "Stratus Financial" && stratusFinancial}
      {currentTab === "Flight Training Finance" && flightTrainingFinance}
      {currentTab === "AOPA" && aopa}
    </div>
  );
};

export default FinancingTabs;
