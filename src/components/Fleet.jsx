import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { fleet } from "../data/fleet";

export default function Fleet() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="summit-fleet" className="relative">
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => {
            setShowModal(!showModal);
            document.body.style.overflow = "auto";
          }}
        >
          <div className="bg-white pt-6 pb-12 px-9 rounded-md text-center text-black h-[99%] w-full max-w-4xl overflow-y-auto">
            <img
              className="aspect-video w-full rounded object-cover"
              src={fleet[selectedId].image}
              alt={fleet[selectedId].alt}
            />
            <h3 className="mt-6 text-xl font-bold leading-8 text-gray-900">
              {fleet[selectedId].name}
            </h3>
            <p className="text-base italic leading-7 text-gray-600">
              {fleet[selectedId].desc}
            </p>
            <p className="text-base italic leading-7 text-gray-600">
              <strong>Flight Rules:</strong>{" "}
              {fleet[selectedId].stats.flightRules}
            </p>
            <p className="text-base italic leading-7 text-gray-600">
              <strong>Avionics:</strong> {fleet[selectedId].stats.avionics}
            </p>
            <div className="mt-6 rounded bg-red-700 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col align-middle justify-center p-9">
                <h4 className="text-xl text-gray-300 font-bold">
                  General Characteristics:
                </h4>
                <ul className="mt-4 list-disc list-inside text-gray-50">
                  <li>
                    <strong>Crew:</strong> {fleet[selectedId].stats.crew}
                  </li>
                  <li>
                    <strong>Capacity:</strong>{" "}
                    {fleet[selectedId].stats.capacity}
                  </li>
                  <li>
                    <strong>Length:</strong> {fleet[selectedId].stats.length}
                  </li>
                  <li>
                    <strong>Wingspan:</strong>{" "}
                    {fleet[selectedId].stats.wingspan}
                  </li>
                  <li>
                    <strong>Height:</strong> {fleet[selectedId].stats.height}
                  </li>
                  <li>
                    <strong>Empty Weight:</strong>{" "}
                    {fleet[selectedId].stats.emptyWeight}
                  </li>
                  <li>
                    <strong>Gross Weight:</strong>{" "}
                    {fleet[selectedId].stats.grossWeight}
                  </li>
                  <li>
                    <strong>Max Takeoff Weight:</strong>{" "}
                    {fleet[selectedId].stats.maxTakeoffWeight}
                  </li>
                  <li>
                    <strong>Powerplant:</strong>{" "}
                    {fleet[selectedId].stats.powerplant}
                  </li>
                  <li>
                    <strong>Propellers:</strong>{" "}
                    {fleet[selectedId].stats.propellers}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col align-middle justify-center p-9">
                <h4 className="text-xl text-gray-300 font-bold">
                  Performance::
                </h4>
                <ul className="mt-4 list-disc list-inside text-gray-50">
                  <li>
                    <strong>Max Speed:</strong>{" "}
                    {fleet[selectedId].stats.maxSpeed}
                  </li>
                  <li>
                    <strong>Cruise Speed:</strong>{" "}
                    {fleet[selectedId].stats.cruiseSpeed}
                  </li>
                  <li>
                    <strong>Stall Speed:</strong>{" "}
                    {fleet[selectedId].stats.stallSpeed}
                  </li>
                  <li>
                    <strong>Range:</strong> {fleet[selectedId].stats.range}
                  </li>
                  <li>
                    <strong>Service Ceiling:</strong>{" "}
                    {fleet[selectedId].stats.serviceCeiling}
                  </li>
                  <li>
                    <strong>Rate of Climb:</strong>{" "}
                    {fleet[selectedId].stats.climbRate}
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="bg-main-red p-1 rounded-full absolute top-2 right-2"
              onClick={() => {
                setShowModal(!showModal);
                setSelectedId(null);
                document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose className="text-xl text-white" />
            </button>
          </div>
        </div>
      )}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-main-red">
              Our Fleet
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, deserunt. Corrupti, veniam.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid grid-cols-1 gap-y-12 lg:mx-0"
          >
            {fleet.map((plane, index) => (
              <li
                key={plane.id}
                className="hover:shadow-2xl transition-shadow bg-gray-100 duration-300 ease-in py-4 rounded"
              >
                <a
                  className={`px-2 lg:px-6 cursor-pointer flex flex-wrap justify-between ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  onClick={() => {
                    setSelectedId(plane.id);
                    setShowModal(!showModal);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  <div className="w-full lg:w-2/5 aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded">
                    <img
                      className="object-cover w-full h-full hover:scale-110 hover:brightness-110 transition-all duration-700 ease-out"
                      src={plane.image}
                      alt={plane.alt}
                    />
                  </div>
                  <div
                    className={`w-full lg:w-3/5 lg:px-0 flex flex-col justify-start text-center ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                  >
                    <h3
                      className={`mt-6 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"} w-full text-3xl font-bold leading-8 text-main-red`}
                    >
                      {plane.name} {plane.stats.tallNumber}
                    </h3>
                    <p
                      className={`ml-0 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"}  w-full mt-1 text-base italic leading-7 text-gray-600`}
                    >
                      {plane.stats.model}
                    </p>
                    <p className="ml-0 lg:ml-6 pr-0 lg:pr-12 w-full mt-2 text-base text-justify leading-7 text-gray-600">
                      {plane.desc}
                    </p>
                    <p
                      className={`ml-0 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"}  w-full mt-2 text-lg leading-7 text-main-red`}
                    >
                      Rate: ${plane.stats.rentalPrice} <small>/hour</small>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
