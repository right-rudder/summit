import { BsCheckCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import ContactUsModalButton from "./ContactUsModalButton";

import { PHONE_NUMBER } from "../consts";

const PriceCalcZero2Hero = () => {
  const [total, setTotal] = useState(78250);
  const [checkedMei, setCheckedMei] = useState(false);
  const [checkedWritten, setCheckedWritten] = useState(false);
  const [checkedHeadset, setCheckedHeadset] = useState(false);
  const [checkedCheckride, setCheckedCheckride] = useState(false);
  const [checkedStarter, setCheckedStarter] = useState(false);

  return (
    <section id="price-calculator">
      <div class="bg-white py-16 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto w-full lg:mx-0">
            <h2 class="xl:text-6xl text-5xl font-bold tracking-tight text-main-red text-center">
              Cost Estimator
            </h2>
            <p class="mt-4 text-lg leading-8 text-black text-center">
              How to start training with Summit Flight Academy
            </p>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 shadow-xl transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <div className="relative p-6 space-y-6 lg:p-8">
                  <h3 className="text-4xl text-gray-900 font-bold text-center">
                    Zero to Hero
                  </h3>
                  <div className="relative flex justify-around">
                    <div className="flex items-center">
                      <div className="">
                        <span className="block text-3xl text-gray-700 font-bold">
                          $
                        </span>
                      </div>
                      <span className="text-4xl text-gray-700 font-bold leading-0">
                        {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="italic text-center">
                    Go from no experience to <br /> career ready in less than a
                    year
                  </p>
                  <ul
                    role="list"
                    className="w-max space-y-4 pb-6 m-auto text-gray-600"
                  >
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>Private Pilot</span>
                    </li>
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>Instrument Rating</span>
                    </li>
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>Commercial Certificate</span>
                    </li>
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>Multi Engine Rating</span>
                    </li>
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>CFI Certificate</span>
                    </li>
                    <li className="space-x-2 flex flex-nowrap align-middle items-center">
                      <span className="text-sky-500 font-semibold">
                        <BsCheckCircle className="text-main-red" />
                      </span>
                      <span>CFII Instrument</span>
                    </li>
                  </ul>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="lg:ml-9 text-sm lg:text-base font-normal flex justify-center gap-2 items-center max-w-1/2 hover:scale-105 cursor-pointer transition-all"
                  >
                    Call Us
                    <FaPhone className="text-main-red" />
                    {PHONE_NUMBER}
                  </a>
                  <ContactUsModalButton
                    btnStyle={"btn-red w-full"}
                    btnText={"Contact Us"}
                  />
                </div>
              </div>
            </div>
            <div className="relative group w-10/12 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-l from-gray-200 to-gray-100 shadow-lg transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pl-16 lg:p-12">
                <ul role="list" class="space-y-4 pb-6 text-gray-600">
                  <li className="space-x-2 flex flex-nowrap align-middle items-center">
                    <span class="text-sky-500 font-semibold">
                      <BsCheckCircle className="text-main-red" />
                    </span>
                    <span>Accelerated full-time programs</span>
                  </li>
                  <li className="space-x-2 flex flex-nowrap align-middle items-center">
                    <span class="text-sky-500 font-semibold">
                      <BsCheckCircle className="text-main-red" />
                    </span>
                    <span>Instructor and aircraft availability</span>
                  </li>
                  <li className="space-x-2 flex flex-nowrap align-middle items-center">
                    <span class="text-sky-500 font-semibold">
                      <BsCheckCircle className="text-main-red" />
                    </span>
                    <span>Complete within a year</span>
                  </li>
                </ul>
                <div className="mt-6 flex justify-between gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <fieldset>
                      <legend className="mb-2 text-2xl text-gray-800 font-semibold">
                        Add Ons:
                      </legend>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={checkedMei}
                          className="mx-2"
                          id="mei"
                          name="mei"
                          onChange={(e) => {
                            checkedMei
                              ? setTotal(total - 10500)
                              : setTotal(total + 10500);
                            setCheckedMei(!checkedMei);
                          }}
                        />
                        <label htmlFor="mei">MEI</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={checkedWritten}
                          className="mx-2"
                          id="written"
                          name="written"
                          onChange={(e) => {
                            checkedWritten
                              ? setTotal(total - 1050)
                              : setTotal(total + 1050);
                            setCheckedWritten(!checkedWritten);
                          }}
                        />
                        <label htmlFor="written">Written Test Fees</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={checkedHeadset}
                          className="mx-2"
                          id="headset"
                          name="headset"
                          onChange={(e) => {
                            checkedHeadset
                              ? setTotal(total - 1200)
                              : setTotal(total + 1200);
                            setCheckedHeadset(!checkedHeadset);
                          }}
                        />
                        <label htmlFor="headset">Aviation Headset</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={checkedCheckride}
                          className="mx-2"
                          id="checkride"
                          name="checkride"
                          onChange={(e) => {
                            checkedCheckride
                              ? setTotal(total - 7000)
                              : setTotal(total + 7000);
                            setCheckedCheckride(!checkedCheckride);
                          }}
                        />
                        <label htmlFor="checkride">Checkride Fees</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={checkedStarter}
                          className="mx-2"
                          id="starter"
                          name="starter"
                          onChange={(e) => {
                            checkedStarter
                              ? setTotal(total - 1000)
                              : setTotal(total + 1000);
                            setCheckedStarter(!checkedStarter);
                          }}
                        />
                        <label htmlFor="starter">
                          Starter Bundle and Online Courses
                        </label>
                      </div>
                    </fieldset>
                    <div className="mt-4 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center  text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2Hero;
