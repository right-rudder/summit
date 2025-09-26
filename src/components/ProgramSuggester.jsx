import EnrollmentModalButton from "./enrollmentModalButtom";
import { useEffect, useState } from "react";

export default function ProgramSuggester({ packages, webhookUrl, apiKey }) {
  // Base package
  const [currentPackage, setCurrentPackage] = useState(packages.packs[0]);

  // Display price object
  const [currentPrice, setCurrentPrice] = useState(
    packages.packs[0]?.monthlyPrice || { price: 0, afterPrice: "", note: "" }
  );

  const [currentVisible, setCurrentVisible] = useState(false);
  const [currentFeatures, setCurrentFeatures] = useState(
    packages.packs[0]?.packageFeatures || []
  );

  // Selections
  const [packageOption, setPackageOption] = useState("");
  const [priceOption, setPriceOption] = useState(
    packages.question.questions[1].options[0] || ""
  );
  const [timeBuildingOption, setTimeBuildingOption] = useState("");
  const [globOption, setGlobOption] = useState("");

  // User inputs
  const [hoursValue, setHoursValue] = useState(
    Number(packages.flightHours) || 0
  );
  const [flightFrequency, setFlightFrequency] = useState(0);

  // Derived / UI options
  const [options, setOptions] = useState(
    packages.question.questions[0].options
  );
  const [totalHoursPrice, setTotalHoursPrice] = useState(0);

  const UPFRONT_LABEL = "In one up-front payment (discounts available)";
  const MONTHLY_LABEL = "In monthly installments (block time)";

  // ---------- Helpers ----------

  const findOptions = (option) => {
    if (option.includes("Solo")) {
      setOptions([
        " ",
        "12 weeks, flying 1-2 days/week (after solo time building)",
        "5 weeks, flying 5-6 days/week (after solo time building)",
      ]);
    } else if (option.includes("Shared")) {
      setOptions([
        " ",
        "12 weeks, flying 1-2 days/week (after shared time building)",
        "5 weeks, flying 5-6 days/week (after shared time building)",
      ]);
    } else {
      setOptions([
        " ",
        "5 weeks, flying 5-6 days/week",
        "12 weeks, flying 1-2 days/week",
      ]);
    }
  };

const calcTotalPrice = (paymentChoiceArg, packArg) => {
  const paymentChoice = paymentChoiceArg || priceOption;
  const pack = packArg || currentPackage;

  const UPFRONT = UPFRONT_LABEL;
  const MONTHLY = MONTHLY_LABEL;

  // helper: try to infer the minimum months from any range-like field
  const getMinMonths = () => {
    // prefer an explicit months range if you have one
    const candidates = [
      pack.durationMonthsRange,   // e.g. "9-10"
      pack.durationMonths,        // e.g. "5-6" or 6
      pack.durationWeeksRange,    // e.g. "20-24 weeks"
      pack.durationWeeks          // number of weeks
    ];

    for (const c of candidates) {
      if (typeof c === "string") {
        const m = c.match(/\d+/);
        if (m) return Number(m[0]);
      } else if (typeof c === "number") {
        // weeks -> months (same factor you already use)
        return Math.max(1, Math.round(c * 0.230137));
      }
    }
    return undefined;
  };

  // If NO time building is needed (equal counts as enough)
  if (hoursValue >= packages.flightHours) {
    const priceObj = paymentChoice === UPFRONT ? pack.upfrontPrice : pack.monthlyPrice;
    const minMonths = getMinMonths();

    setCurrentPrice({
      price: Number(priceObj?.price || 0),
      afterPrice: paymentChoice === UPFRONT ? "/paid once" : "/month",
      // Prefer the package's own note (keeps "for nine months" wording).
      // If it's missing, fallback to "for X months" from the min range.
      note: priceObj?.note || (minMonths ? `for ${minMonths} months` : ""),
    });
    setCurrentFeatures(pack.packageFeatures || []);
    return;
  }

  // Time building needed
  if (paymentChoice === MONTHLY) {
    const remainingHours = Math.max(packages.flightHours - hoursValue, 0);
    const weeksFromTimeBuilding = flightFrequency > 0 ? remainingHours / flightFrequency : 0;

    const months = Math.max(
      1,
      Math.ceil((weeksFromTimeBuilding + (pack.durationWeeks || 0)) * 0.230137)
    );

    const baseMonthly = Number(pack.monthlyPrice?.price || 0);
    const pricePerMonth = (baseMonthly + Number(totalHoursPrice || 0)) / months;

    setCurrentPrice({
      price: pricePerMonth,
      afterPrice: "/month",
      note: `for ${months} months`,
    });
  } else if (paymentChoice === UPFRONT) {
    const baseUpfront = Number(pack.upfrontPrice?.price || 0);
    setCurrentPrice({
      price: baseUpfront + Number(totalHoursPrice || 0),
      afterPrice: "/paid once",
      note: "",
    });
  } else {
    // Fallback (treat as upfront)
    const baseUpfront = Number(pack.upfrontPrice?.price || 0);
    setCurrentPrice({
      price: baseUpfront + Number(totalHoursPrice || 0),
      afterPrice: "/paid once",
      note: "",
    });
  }

  setCurrentFeatures([
    "Time Building Type: " + (globOption.includes("Solo") ? "Solo" : "Shared"),
    "Time Building Hours: " + Math.max(packages.flightHours - hoursValue, 0),
    "Commercial Program Duration: " + (pack.durationWeeks || 0) + " weeks",
    "Commercial Training Frequency: " + (pack.programFrequency || ""),
  ]);
};

  const findPackage = (option) => {
    const pack = packages.packs.find((p) => p.option === option);
    if (!pack) return;

    setCurrentPackage(pack);

    if (hoursValue <= packages.flightHours && pack?.hourPrice) {
      setTotalHoursPrice(
        Math.max(packages.flightHours - hoursValue, 0) * Number(pack.hourPrice)
      );
    }

    // Ensure the display reflects the newly selected pack
    findPrice(priceOption, pack);
  };

  const findPrice = (option, packArg) => {
    const pack = packArg || currentPackage;
    if (!pack) return;

    if (option === MONTHLY_LABEL) {
      setCurrentPrice(pack.monthlyPrice || { price: 0, afterPrice: "", note: "" });
      if (hoursValue <= packages.flightHours && pack?.hourPrice) {
        setTotalHoursPrice(
          Math.max(packages.flightHours - hoursValue, 0) * Number(pack.hourPrice)
        );
      }
      calcTotalPrice(option, pack);
    } else if (option === UPFRONT_LABEL) {
      setCurrentPrice(pack.upfrontPrice || { price: 0, afterPrice: "", note: "" });
      calcTotalPrice(option, pack);
    } else {
      // Unknown label → default to upfront computation
      setCurrentPrice(pack.upfrontPrice || { price: 0, afterPrice: "", note: "" });
      calcTotalPrice(option, pack);
    }
  };

  // ---------- Effects ----------

  useEffect(() => {
    if (!currentPackage?.hourPrice) {
      setTotalHoursPrice(0);
      return;
    }
    const remaining = Math.max(packages.flightHours - hoursValue, 0);
    const derived = remaining * Number(currentPackage.hourPrice);
    setTotalHoursPrice(derived);
  }, [hoursValue, currentPackage, packages.flightHours]);

  useEffect(() => {
    if (!currentPackage) return;
    calcTotalPrice(priceOption, currentPackage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoursValue, flightFrequency, priceOption, currentPackage, globOption, totalHoursPrice]);

  // ---------- Render ----------

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
          {/* LEFT SIDE */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-4xl text-center font-bold tracking-tight text-gray-900">
              {packages.question.questionHeading}
            </h3>
            <p className="mt-6 text-base text-center leading-7 text-gray-600">
              {packages.question.questionDescription}
            </p>

            <div className="mt-10 flex flex-col items-center gap-x-4">
              {!!packages.flightHours && (
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
                    value={hoursValue}
                    className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                    step={15}
                    min={110}
                    onChange={(e) => {
                      const val = Number(e.target.value || 0);
                      setHoursValue(val);
                      if (val <= packages.flightHours) {
                        if (currentPackage?.hourPrice) {
                          setTotalHoursPrice(
                            Math.max(packages.flightHours - val, 0) *
                              Number(currentPackage.hourPrice)
                          );
                        }
                        findOptions("Commercial");
                      }
                    }}
                  />

                  {hoursValue < packages.flightHours && (
                    <div className="mt-6 flex flex-col justify-center items-center bg-gray-200 rounded-md p-12">
                      <h3 className="w-full text-2xl lg:px-10 text-center font-semibold leading-6 text-main-red">
                        You Need Time Building
                      </h3>

                      <p className="w-full mt-1 md:w-3/4 text-center">
                        You have{" "}
                        <strong>
                          {Math.max(packages.flightHours - hoursValue, 0)} hours
                        </strong>{" "}
                        left before you can start our Commercial Program.
                      </p>

                      <div className="mt-7 flex flex-col justify-center items-center">
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
                            value={timeBuildingOption || packages.hoursQuestion2.options[0]}
                            className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            onChange={(e) => {
                              const val = e.target.value;
                              setCurrentVisible(false);
                              setTimeBuildingOption(val);
                              setGlobOption(val);
                              findOptions(val);
                            }}
                          >
                            {packages.hoursQuestion2.options.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div className="mt-10 flex flex-col justify-center items-center">
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
                            value={flightFrequency}
                            className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            step={1}
                            min={4}
                            max={20}
                            onChange={(e) =>
                              setFlightFrequency(Number(e.target.value || 0))
                            }
                          />
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
                  value={packageOption || options[0] || ""}
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  onChange={(e) => {
                    const val = e.target.value;
                    setPackageOption(val);
                    findPackage(val);
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
                  value={priceOption}
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  onChange={(e) => {
                    const val = e.target.value;
                    setPriceOption(val);
                    findPrice(val);
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

          {/* RIGHT SIDE */}
          <div
            className={`${
              currentVisible ? "w-full h-full opacity-100" : "w-0 opacity-0 h-0"
            } duration-1000 transition-all -mt-2 p-2 lg:mt-0 lg:max-w-md lg:flex-shrink-0 sticky top-20`}
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
                    ${" "}
                    {Number.isFinite(currentPrice?.price)
                      ? Math.ceil(Number(currentPrice.price)).toLocaleString("en-US")
                      : "0"}
                  </span>
                  {currentPrice.afterPrice && (
                    <span className="text-sm font-semibold leading-6 text-gray-100">
                      {currentPrice.afterPrice}
                    </span>
                  )}
                </p>


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
                    : (currentPackage.packageFeatures || []).map((feature) => (
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
                  webhookUrl={webhookUrl}
                  apiKey={apiKey}
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
          {/* END RIGHT SIDE */}
        </div>
      </div>
    </section>
  );
}
