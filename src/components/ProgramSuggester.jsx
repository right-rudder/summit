import EnrollmentModalButton from "./enrollmentModalButtom";
import { useEffect, useState } from "react";

export default function ProgramSuggester({ packages }) {
  const [currentPackage, setCurrentPackage] = useState(packages.packs[0]);
  const [currentPrice, setCurrentPrice] = useState(currentPackage.monthlyPrice);
  const [currenVisible, setCurrentVisible] = useState(false);
  const [currentFeatures, setCurrentFeatures] = useState(
    currentPackage.packageFeatures,
  );
  const [packageOption, setPackageOption] = useState("");
  const [timeBuildingOption, setTimeBuildingOption] = useState("");

  const [hoursValue, setHoursValue] = useState(packages.flightHours);
  const [totalHoursPrice, setTotalHoursPrice] = useState(0);
  const [flightFrequency, setFlightFrequency] = useState(8);

  const [options, setOptions] = useState(
    packages.flightHours ? [] : packages.question.questions[0].options,
  );
  const [priceOption, setPriceOption] = useState(" ");
  const [globOption, setGlobOption] = useState("");

  const findOptions = (option) => {
    calcTotalPrice(globOption);
    if (option.includes("Solo")) {
      setOptions([
        " ",
        "6 months (10 weeks Solo Time Building + 12 weeks Commercial Program)",
        "3 months (6 weeks Solo Time Building + 5 weeks Commercial Program)",
      ]);
    } else if (option.includes("Shared")) {
      setOptions([
        " ",
        "6 months (10 weeks Shared Time Building + 12 weeks Commercial Program",
        "3 months (6 weeks Shared Time Building + 5 weeks Commercial Program)",
      ]);
    } else {
      setOptions([
        " ",
        "5 weeks, flying 6 hours/week",
        "3 months, flying 3 hours/week",
      ]);
    }
  };

  const calcTotalPrice = (afterPrice) => {
    if (hoursValue > packages.flightHours) {
      setCurrentFeatures(currentPackage.packageFeatures);
      return;
    }
    !afterPrice && (afterPrice = globOption);
    if (afterPrice === "In monthly installments (block time)") {
      console.log("calcTotalPrice");
      console.log("currentPackage", currentPackage);
      console.log("top", currentPackage.durationWeeks);
      console.log(
        "bottom",
        Math.ceil(
          ((packages.flightHours - hoursValue) / flightFrequency +
            currentPackage.durationWeeks) *
            0.230137,
        ),
      );
      setCurrentPrice({
        price:
          (currentPackage.monthlyPrice.price + totalHoursPrice) /
          Math.ceil(
            ((packages.flightHours - hoursValue) / flightFrequency +
              currentPackage.durationWeeks) *
              0.230137,
          ),
        afterPrice: "/month",
        note:
          "for " +
          Math.ceil(
            ((packages.flightHours - hoursValue) / flightFrequency +
              currentPackage.durationWeeks) *
              0.230137,
          ) +
          " months",
      });
      setCurrentFeatures([
        "Time Building Type: " +
          (globOption.includes("Solo") ? "Solo" : "Shared"),
        "Time Building Hours: " + (packages.flightHours - hoursValue),
        "Commercial Program Duration: " +
          currentPackage.durationWeeks +
          " weeks",
        "Commercial Training Frequency: " + currentPackage.programFrequency,
      ]);
    } else {
      console.log("calcTotalPrice else");
      setCurrentPrice({
        price: currentPackage.monthlyPrice.price + totalHoursPrice,
        afterPrice: "/paid once",
        note: "",
      });
      setCurrentFeatures([
        "Time Building Type: " +
          (globOption.includes("Solo") ? "Solo" : "Shared"),
        "Time Building Hours: " + (packages.flightHours - hoursValue),
        "Commercial Program Duration: " +
          currentPackage.durationWeeks +
          " weeks",
        "Commercial Training Frequency: " + currentPackage.programFrequency,
      ]);
    }
  };

  const findPackage = (option) => {
    const pack = packages.packs.find((pack) => pack.option === option);
    if (!pack) {
      return;
    }
    setCurrentPackage(pack);
    console.log("findpackage");
    findPrice(priceOption);
    if (hoursValue < packages.flightHours) {
      setTotalHoursPrice((packages.flightHours - hoursValue) * pack.hourPrice);
      calcTotalPrice(priceOption);
    }
  };

  const findPrice = (option) => {
    if (option === "In monthly installments (block time)") {
      console.log("findprice");
      setCurrentPrice(currentPackage.monthlyPrice);
      if (hoursValue <= packages.flightHours) {
        setTotalHoursPrice(
          (packages.flightHours - hoursValue) * currentPackage.hourPrice,
        );
        calcTotalPrice(option);
      }
    } else if (option === "In one up-front payment (discounts available)") {
      console.log("findprice else if");
      setCurrentPrice(currentPackage.upfrontPrice);
    } else {
      return;
      console.log("findprice else");
      setCurrentPrice({ price: 0 });
    }
  };

  useEffect(() => {
    packages.flightHours &&
      packages.flightHours > hoursValue &&
      currentPackage.durationWeeks &&
      calcPriceAndFindPackages();
  }, [
    flightFrequency,
    priceOption,
    hoursValue,
    packageOption,
    timeBuildingOption,
  ]);

  const calcPriceAndFindPackages = () => {
    calcTotalPrice(priceOption);
    findPackage(packageOption);
  };

  return (
    <section className="bg-gray-100 lg:pt-24 pb-12 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            {packages.upperHeading}
          </h2>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {packages.heading}
          </h2>
          <p className="mt-6 text-lg lg:px-6 leading-7 text-gray-600">
            {packages.description}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gray-50 ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-4xl text-center font-bold tracking-tight text-gray-900">
              {packages.question.questionHeading}
            </h3>
            <p className="mt-6 text-base text-center leading-7 text-gray-600">
              {packages.question.questionDescription}
            </p>
            <div className="mt-10 flex flex-col items-center gap-x-4">
              {packages.flightHours && (
                <>
                  <label
                    htmlFor="flight-time"
                    className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red"
                  >
                    {packages.hoursQuestion}
                  </label>
                  <input
                    name="flight-time"
                    id="flight-time"
                    type="number"
                    defaultValue={hoursValue}
                    className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                    step={15}
                    min={110}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setHoursValue(e.target.value);
                      // console.log(packages.flightHours);
                      // console.log(currentPackage);
                      // console.log(currentPackage.hourPrice);
                      if (hoursValue <= packages.flightHours) {
                        if (currentPackage.hourPrice) {
                          setTotalHoursPrice(
                            (packages.flightHours - e.target.value) *
                              currentPackage.hourPrice,
                          );
                        }
                        findOptions("Commercial");
                      }
                    }}
                  />
                  {currentPackage.hourPrice &&
                    hoursValue <= packages.flightHours && (
                      <p>Hour Price $ {currentPackage.hourPrice}</p>
                    )}

                  {hoursValue < packages.flightHours && (
                    <div className="mt-6 flex flex-col justify-center align-middle items-center bg-gray-200 rounded-md p-12">
                      <h3 className="w-full text-2xl lg:px-10 text-center font-semibold leading-6 text-main-red">
                        You Need Time Building
                      </h3>
                      <p>
                        You have {packages.flightHours - hoursValue} hours left
                      </p>
                      <div className="mt-7 flex flex-col justify-center align-middle items-center">
                        <h4 className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                          {packages.hoursQuestion2.question}
                        </h4>
                        <div className="flex-auto mt-2 w-full lg:w-3/5">
                          <label htmlFor="hoursQuestion2" className="sr-only">
                            Select a tab
                          </label>
                          <select
                            id="hoursQuestion2"
                            name="hoursQuestion2"
                            defaultValue={packages.hoursQuestion2.options[0]}
                            className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            onChange={(e) => {
                              setCurrentVisible(false);
                              calcTotalPrice(priceOption);
                              setTimeBuildingOption(e.target.value);
                              findOptions(e.target.value);
                              setGlobOption(e.target.value);
                            }}
                          >
                            {packages.hoursQuestion2.options.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-10 flex flex-col justify-center align-middle items-center">
                          <label
                            htmlFor="flight-frequency"
                            className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red"
                          >
                            {packages.frequencyQuestion}
                          </label>
                          <input
                            name="flight-frequency"
                            id="flight-frequency"
                            type="number"
                            defaultValue={flightFrequency}
                            className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            step={2}
                            min={8}
                            max={20}
                            onChange={(e) => {
                              setFlightFrequency(e.target.value);
                            }}
                          />
                          <p>{globOption}</p>
                          <p>
                            Total Hours Price $
                            {totalHoursPrice.toLocaleString("en-US")}
                          </p>
                          <p>
                            Total Pack Price $
                            {currentPackage.monthlyPrice.price}
                          </p>
                          <p>
                            Total Price $
                            {(
                              currentPackage.monthlyPrice.price +
                              totalHoursPrice
                            ).toLocaleString("en-US")}
                          </p>
                          <p>
                            Pack Weeks : {currentPackage.durationWeeks} weeks
                          </p>
                          <p>
                            Time Building :{" "}
                            {Math.ceil(
                              (packages.flightHours - hoursValue) /
                                flightFrequency,
                            )}
                            weeks
                          </p>
                          <p>Flight Freq : {flightFrequency} hours per week</p>
                          <p>
                            Needed Flight Time:{" "}
                            {packages.flightHours - hoursValue} hours
                          </p>
                          <p>
                            Total Weeks:
                            {Math.round(
                              (packages.flightHours - hoursValue) /
                                flightFrequency +
                                currentPackage.durationWeeks,
                            )}
                          </p>
                          <p>
                            Total Months:
                            {Math.round(
                              ((packages.flightHours - hoursValue) /
                                flightFrequency +
                                currentPackage.durationWeeks) *
                                0.230137,
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <h4 className="mt-6 w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                {packages.question.questions[0].question}
              </h4>
              <div className="flex-auto mt-2 w-full lg:w-3/5">
                <label htmlFor="question1" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="question1"
                  name="question1"
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  onChange={(e) => {
                    findPackage(e.target.value);
                    setPackageOption(e.target.value);
                    setCurrentVisible(true);
                  }}
                >
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-x-4">
              <h4 className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                {packages.question.questions[1].question}
              </h4>
              <div className="flex-auto mt-2 w-full lg:w-3/5">
                <label htmlFor="question2" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="question2"
                  name="question2"
                  defaultValue={packages.question.questions[1].options[0]}
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  onChange={(e) => {
                    findPrice(e.target.value);
                    setPriceOption(e.target.value);
                  }}
                >
                  {packages.question.questions[1].options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="mt-8 bg-gray-200 rounded-lg p-4 lg:p-12">
                <h5 className="text-xl font-bold text-center">
                  All packages will include:
                </h5>
                <ul
                  role="list"
                  className="mt-6 px-7 lg:px-0 space-y-3 text-lg text-left leading-6 text-gray-900"
                >
                  {packages.allInclude.map((feature) => (
                    <li className="flex gap-x-3" key={feature}>
                      <svg
                        className="h-6 w-5 flex-none text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${currenVisible ? "w-full h-full opacity-100" : "w-0 opacity-0 h-0"} duration-1000 transition-all -mt-2 p-2 lg:mt-0 lg:max-w-md lg:flex-shrink-0 sticky top-20`}
          >
            <div className="mt-4 lg:mt-0 rounded-xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id="best-package"
                  className="text-base font-semibold leading-7 text-center text-gray-200"
                >
                  {currentPackage.packageName}
                </h3>
                <p className="mt-6 w-full flex justify-center items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-200 font-serif">
                    {currentPrice.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                  {currentPrice.afterPrice && (
                    <span className="text-sm font-semibold leading-6 text-gray-100">
                      {currentPrice.afterPrice}
                    </span>
                  )}
                </p>
                {currentPrice.note && (
                  <p className="mt-3 text-sm leading-6 text-gray-500 font-serif">
                    {currentPrice.note}
                  </p>
                )}
                <ul
                  role="list"
                  className="mx-auto w-fit mt-6 px-7 lg:px-0 space-y-3 text-sm text-left leading-6 text-gray-100"
                >
                  {currentPackage.durationWeeks
                    ? currentFeatures.map((feature) => (
                        <li className="flex gap-x-3" key={feature}>
                          <svg
                            className="h-6 w-5 flex-none text-red-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))
                    : currentPackage.packageFeatures.map((feature) => (
                        <li className="flex gap-x-3" key={feature}>
                          <svg
                            className="h-6 w-5 flex-none text-red-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                </ul>
                <EnrollmentModalButton
                  btnStyle={
                    "mt-10 block mx-auto w-1/2 lg:w-3/4 bg-red-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  }
                  btnText={"Enroll Now"}
                  client:visible
                />
                <p className="mt-10 text-sm font-normal px-4 lg:px-0 text-justify leading-6 text-gray-200">
                  {currentPackage.packageDescription}
                </p>
                <p className="mt-10 text-xs px-5 lg:px-0 text-justify font-light leading-none text-gray-500">
                  {currentPackage.packageLittlePrint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
