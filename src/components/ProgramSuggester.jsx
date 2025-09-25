// ProgramSuggesterFixed.jsx
import { useEffect, useMemo, useState } from "react";
import EnrollmentModalButton from "./enrollmentModalButtom";

/**
 * Expected `packages` shape (same as your previous component)
 * See inline comments if you need to tweak labels.
 */

const PM_MONTHLY = "In monthly installments (block time)";
const PM_UPFRONT = "In one up-front payment (discounts available)";

/** helper to coerce to non-negative integer */
const toInt = (v, fallback = 0) => {
  const n = Number.parseInt(String(v), 10);
  return Number.isFinite(n) ? Math.max(0, n) : fallback;
};

export default function ProgramSuggester({
  packages,
  webhookUrl,
  apiKey,
}) {
  // --- SELECTED PACKAGE ------------------------------------------------------
  const defaultPack = packages?.packs?.[0];
  const [selectedOption, setSelectedOption] = useState(
    defaultPack?.option ?? "",
  );
  const selectedPack = useMemo(
    () =>
      packages.packs.find((p) => p.option === selectedOption) ?? defaultPack,
    [packages.packs, selectedOption, defaultPack],
  );

  // --- PAYMENT MODE (Monthly by default, robust to data order/labels) --------
  const rawPaymentOptions = packages?.question?.questions?.[1]?.options ?? [
    PM_MONTHLY,
    PM_UPFRONT,
  ];

  // Ensure monthly-looking option appears first in the dropdown
  const paymentOptions = useMemo(() => {
    const opts = Array.isArray(rawPaymentOptions) ? rawPaymentOptions : [];

    const monthly =
      opts.find((o) => o === PM_MONTHLY) ||
      opts.find((o) => /monthly/i.test(String(o))) ||
      PM_MONTHLY;

    const upfront =
      opts.find((o) => o === PM_UPFRONT) ||
      opts.find((o) => /(up[\s-]?front|once|full)/i.test(String(o))) ||
      PM_UPFRONT;

    const result = [];
    if (!result.includes(monthly)) result.push(monthly);
    if (!result.includes(upfront)) result.push(upfront);

    // Ensure exactly two options, with monthly first
    if (result.length < 2) {
      if (!result.includes(PM_MONTHLY)) result.unshift(PM_MONTHLY);
      if (result.length < 2 && !result.includes(PM_UPFRONT)) result.push(PM_UPFRONT);
    }

    return result.slice(0, 2);
  }, [rawPaymentOptions]);

  // Force "monthly" as the default selected value
  const [priceOption, setPriceOption] = useState(PM_MONTHLY);

  // Snap to monthly if options load later or label varies slightly
  useEffect(() => {
    const m =
      paymentOptions.find((o) => o === PM_MONTHLY) ||
      paymentOptions.find((o) => /monthly/i.test(o)) ||
      PM_MONTHLY;
    setPriceOption(m);
  }, [paymentOptions]);

  // --- USER INPUTS -----------------------------------------------------------
  const [hoursValue, setHoursValue] = useState(
    toInt(packages?.flightHours ?? 0), // start at requirement by default
  );
  const [flightFrequency, setFlightFrequency] = useState(0); // flights per week during TB
  const [tbMode, setTbMode] = useState(
    packages?.hoursQuestion2?.options?.[0] ?? "Solo",
  );

  // --- DERIVED NUMBERS -------------------------------------------------------
  const requiredHours = toInt(packages?.flightHours ?? 0);
  const remainingHours = Math.max(requiredHours - toInt(hoursValue), 0);
  const tbHourPrice = toInt(selectedPack?.hourPrice ?? 0);
  const timeBuildingCost = remainingHours * tbHourPrice;

  const baseMonthly = toInt(selectedPack?.monthlyPrice?.price ?? 0);
  const baseUpfront = toInt(selectedPack?.upfrontPrice?.price ?? 0);

  // months ~= ceil( (TB weeks + program weeks) * 0.230137 )
  const monthsForPlan = useMemo(() => {
    if (!/monthly/i.test(priceOption)) return 0;
    const freq = toInt(flightFrequency);
    const tbWeeks = remainingHours > 0 && freq > 0 ? remainingHours / freq : 0;
    const programWeeks = toInt(selectedPack?.durationWeeks ?? 0);
    const totalWeeks = tbWeeks + programWeeks;
    return Math.max(1, Math.ceil(totalWeeks * 0.230137));
  }, [
    priceOption,
    flightFrequency,
    remainingHours,
    selectedPack?.durationWeeks,
  ]);

  // --- PRICE OBJECT (ALWAYS FRESH) ------------------------------------------
  const currentPrice = useMemo(() => {
    if (/monthly/i.test(priceOption)) {
      const months = monthsForPlan || 1;
      const perMonth = (baseMonthly + timeBuildingCost) / months;
      return {
        price: Math.ceil(perMonth),
        afterPrice: "/month",
        note: `for ${months} month${months > 1 ? "s" : ""}`,
      };
    }
    return {
      price: Math.ceil(baseUpfront + timeBuildingCost),
      afterPrice: "/paid once",
      note: "",
    };
  }, [priceOption, monthsForPlan, baseMonthly, baseUpfront, timeBuildingCost]);

  // --- FEATURES PANEL --------------------------------------------------------
  const featureList = useMemo(() => {
    const base = selectedPack?.packageFeatures ?? [];
    if (remainingHours <= 0) return base;

    const tbType = String(tbMode).includes("Solo") ? "Solo" : "Shared";
    const addOns = [
      `Time Building Type: ${tbType}`,
      `Time Building Hours: ${remainingHours}`,
    ];
    if (selectedPack?.durationWeeks) {
      addOns.push(
        `Commercial Program Duration: ${selectedPack.durationWeeks} weeks`,
      );
    }
    if (selectedPack?.programFrequency) {
      addOns.push(
        `Commercial Training Frequency: ${selectedPack.programFrequency}`,
      );
    }
    return addOns;
  }, [selectedPack, remainingHours, tbMode]);

  // --- PACKAGE SELECT OPTIONS ------------------------------------------------
  const packageQuestion = packages?.question?.questions?.[0];
  const packageSelectOptions = useMemo(() => {
    const explicit = packageQuestion?.options ?? [];
    if (explicit.length) return explicit;
    return packages.packs.map((p) => p.option);
  }, [packageQuestion?.options, packages.packs]);

  useEffect(() => {
    if (!selectedOption && packageSelectOptions.length) {
      setSelectedOption(packageSelectOptions[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageSelectOptions.length]);

  // --- RENDER ---------------------------------------------------------------
  return (
    <section className="bg-gray-100 lg:pt-24 pb-12 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            {packages?.upperHeading}
          </h2>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {packages?.heading}
          </h2>
          <p className="mt-6 text-lg lg:px-6 leading-7 text-gray-600">
            {packages?.description}
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gray-50 ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {/* Left column: form & inclusions */}
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-4xl text-center font-bold tracking-tight text-gray-900">
              {packages?.question?.questionHeading}
            </h3>
            <p className="mt-6 text-base text-center leading-7 text-gray-600">
              {packages?.question?.questionDescription}
            </p>

            {/* Inputs */}
            <div className="mt-10 flex flex-col items-center gap-x-4">
              {Number.isFinite(requiredHours) && requiredHours > 0 && (
                <>
                  {/* Flight time input */}
                  <label
                    htmlFor="flight-time"
                    className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red"
                  >
                    {packages?.hoursQuestion}
                  </label>
                  <input
                    id="flight-time"
                    type="number"
                    value={hoursValue}
                    className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                    step={5}
                    min={0}
                    onChange={(e) => setHoursValue(toInt(e.target.value, 0))}
                  />

                  {/* Time building panel */}
                  {remainingHours > 0 && (
                    <div className="mt-6 flex flex-col justify-center items-center bg-gray-200 rounded-md p-12">
                      <h3 className="w-full text-2xl lg:px-10 text-center font-semibold leading-6 text-main-red">
                        You Need Time Building
                      </h3>
                      <p className="w-full mt-1 md:w-3/4 text-center">
                        You have <strong>{remainingHours} hours</strong> left
                        before you can start our Commercial Program.
                      </p>

                      <div className="mt-7 flex flex-col justify-center items-center">
                        <h4 className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                          {packages?.hoursQuestion2?.question}
                        </h4>

                        <div className="flex-auto mt-2 w-full lg:w-3/5">
                          <label htmlFor="tb-mode" className="sr-only">
                            Select time-building mode
                          </label>
                          <select
                            id="tb-mode"
                            className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            value={tbMode}
                            onChange={(e) => setTbMode(e.target.value)}
                          >
                            {(
                              packages?.hoursQuestion2?.options ?? [
                                "Solo",
                                "Shared",
                              ]
                            ).map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mt-10 flex flex-col justify-center items-center">
                          <label
                            htmlFor="flight-frequency"
                            className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red"
                          >
                            {packages?.frequencyQuestion}
                          </label>
                          <input
                            id="flight-frequency"
                            type="number"
                            value={flightFrequency}
                            className="w-20 mt-2 py-2 text-xl font-serif font-bold text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                            step={1}
                            min={0}
                            max={30}
                            onChange={(e) =>
                              setFlightFrequency(toInt(e.target.value, 0))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Q1: Choose package */}
              <h4 className="mt-6 w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                {packages?.question?.questions?.[0]?.question}
              </h4>
              <div className="flex-auto mt-2 w-full lg:w-3/5">
                <label htmlFor="package-select" className="sr-only">
                  Select a package
                </label>
                <select
                  id="package-select"
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  {packageSelectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment mode, inclusions */}
            <div className="mt-10 flex flex-col items-center gap-x-4">
              {/* Q2: Payment mode */}
              <h4 className="w-full lg:px-10 text-lg text-center font-semibold leading-6 text-main-red">
                {packages?.question?.questions?.[1]?.question}
              </h4>
              <div className="flex-auto mt-2 w-full lg:w-3/5">
                <label htmlFor="payment-mode" className="sr-only">
                  Select payment mode
                </label>
                <select
                  id="payment-mode"
                  className="block w-full px-6 py-4 text-center bg-gray-900 text-gray-50 rounded-lg border-gray-300 focus:border-main-red focus:ring-main-red"
                  value={priceOption}
                  onChange={(e) => setPriceOption(e.target.value)}
                >
                  {paymentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Inclusions */}
              <div className="mt-8 bg-gray-200 rounded-lg p-4 lg:p-12">
                <h5 className="text-xl font-bold text-center">
                  All packages will include:
                </h5>
                <ul
                  role="list"
                  className="mt-6 px-7 lg:px-0 space-y-3 text-lg text-left leading-6 text-gray-900"
                >
                  {(packages?.allInclude ?? []).map((feature) => (
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
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: sticky price & details */}
          <div className="w-full h-full opacity-100 duration-1000 transition-all -mt-2 p-2 lg:mt-0 lg:max-w-md lg:flex-shrink-0 sticky top-20">
            <div className="mt-4 lg:mt-0 rounded-xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-center text-gray-200">
                  {selectedPack?.packageName}
                </h3>

                {/* Price */}
                <p className="mt-6 w-full flex justify-center items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-200 font-serif">
                    $ {Number(currentPrice?.price ?? 0).toLocaleString("en-US")}
                  </span>
                  {currentPrice?.afterPrice ? (
                    <span className="text-sm font-semibold leading-6 text-gray-100">
                      {currentPrice.afterPrice}
                    </span>
                  ) : null}
                </p>
                {currentPrice?.note ? (
                  <p className="mt-3 text-sm leading-6 text-gray-500 font-serif">
                    {currentPrice.note}
                  </p>
                ) : null}

                {/* Feature list (contextual if TB required) */}
                <ul
                  role="list"
                  className="mx-auto w-fit mt-6 px-7 lg:px-0 space-y-3 text-sm text-left leading-6 text-gray-100"
                >
                  {featureList.map((f) => (
                    <li className="flex gap-x-3" key={f}>
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
                        />
                      </svg>
                      <span>{f}</span>
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
                  {selectedPack?.packageDescription}
                </p>
                <p className="mt-10 text-xs px-5 lg:px-0 text-justify font-light leading-none text-gray-500">
                  {selectedPack?.packageLittlePrint}
                </p>
              </div>
            </div>
          </div>
          {/* /Right column */}
        </div>
      </div>
    </section>
  );
}
