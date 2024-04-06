import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { fleet } from "../data/fleet";
import CarouselImages from "./carouselImages";

export default function Fleet() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="summit-fleet" className="relative">
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white pt-6 pb-12 px-9 rounded-md text-center text-black h-[99%] w-full max-w-4xl overflow-y-auto">
            <CarouselImages images={fleet[selectedId].images} />
            <h3 className="mt-6 text-xl font-bold leading-8 text-gray-900">
              {fleet[selectedId].tailNumber}
              <small> ({fleet[selectedId].name})</small>
            </h3>
            <h5 className="text-sm italic">{fleet[selectedId].model}</h5>
            <p className="mt-8 text-base leading-6 text-gray-600 px-6">
              {fleet[selectedId].desc}
            </p>
            {fleet[selectedId].flightRules && (
              <p className="mt-6 text-base italic leading-7 text-gray-600">
                <strong>Flight Rules:</strong> {fleet[selectedId].flightRules}
              </p>
            )}
            {fleet[selectedId].avionics && (
              <p className="text-base italic leading-7 text-gray-600">
                <strong>Avionics:</strong> {fleet[selectedId].avionics}
              </p>
            )}
            {fleet[selectedId].specifications && (
              <div className="p-8 mt-4 rounded text-left bg-red-700">
                <h3 className="w-full text-center text-white text-2xl font-semibold">
                  Specifications
                </h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Exterior:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.exterior.exteriorHeight ? "" : "hidden"}`}
                      >
                        <strong>Exterior Height:</strong>{" "}
                        {
                          fleet[selectedId].specifications.exterior
                            .exteriorHeight
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.exterior.wingSpan ? "" : "hidden"}`}
                      >
                        <strong>Wing Span:</strong>{" "}
                        {fleet[selectedId].specifications.exterior.wingSpan}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.exterior.length ? "" : "hidden"}`}
                      >
                        <strong>Length:</strong>{" "}
                        {fleet[selectedId].specifications.exterior.length}
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Occupancy:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.occupancy.crew ? "" : "hidden"}`}
                      >
                        <strong>Crew:</strong>{" "}
                        {fleet[selectedId].specifications.occupancy.crew}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.occupancy.pax ? "" : "hidden"}`}
                      >
                        <strong>Passengers:</strong>{" "}
                        {fleet[selectedId].specifications.occupancy.pax}
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Operating Weights:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.weights.maxTakeoffWeight ? "" : "hidden"}`}
                      >
                        <strong>Max T/O Weight:</strong>{" "}
                        {
                          fleet[selectedId].specifications.weights
                            .maxTakeoffWeight
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.maxLandingWeight ? "" : "hidden"}`}
                      >
                        <strong>Max Landing Weight:</strong>{" "}
                        {
                          fleet[selectedId].specifications.weights
                            .maxLandingWeight
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.maxLandingWeight ? "" : "hidden"}`}
                      >
                        <strong>Max Landing Weight:</strong>{" "}
                        {
                          fleet[selectedId].specifications.weights
                            .maxLandingWeight
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.emptyWeight ? "" : "hidden"}`}
                      >
                        <strong>Empty Weight:</strong>{" "}
                        {fleet[selectedId].specifications.weights.emptyWeight}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.fuelCapacity ? "" : "hidden"}`}
                      >
                        <strong>Fuel Capacity:</strong>{" "}
                        {fleet[selectedId].specifications.weights.fuelCapacity}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.usefulPayload ? "" : "hidden"}`}
                      >
                        <strong>Payload Useful:</strong>{" "}
                        {fleet[selectedId].specifications.weights.usefulPayload}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.weights.fullFuelPayload ? "" : "hidden"}`}
                      >
                        <strong>Payload W/Full Fuel:</strong>{" "}
                        {
                          fleet[selectedId].specifications.weights
                            .fullFuelPayload
                        }
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Performance:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.performance.rateOfClimb ? "" : "hidden"}`}
                      >
                        <strong>Rate of Climb:</strong>{" "}
                        {
                          fleet[selectedId].specifications.performance
                            .rateOfClimb
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.performance.maxSpeed ? "" : "hidden"}`}
                      >
                        <strong>Max Speed:</strong>{" "}
                        {fleet[selectedId].specifications.performance.maxSpeed}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.performance.normalCruiseSpeed ? "" : "hidden"}`}
                      >
                        <strong>Normal Cruise:</strong>{" "}
                        {
                          fleet[selectedId].specifications.performance
                            .normalCruiseSpeed
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.performance.economyCruiseSpeed ? "" : "hidden"}`}
                      >
                        <strong>Economy Cruise:</strong>{" "}
                        {
                          fleet[selectedId].specifications.performance
                            .economyCruiseSpeed
                        }
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">Range:</h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.range.maxRange ? "" : "hidden"}`}
                      >
                        <strong>Max Range:</strong>{" "}
                        {fleet[selectedId].specifications.range.maxRange}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.range.serviceCeiling ? "" : "hidden"}`}
                      >
                        <strong>Service Ceiling:</strong>{" "}
                        {fleet[selectedId].specifications.range.serviceCeiling}
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Distances:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.distances.takeoffDistance ? "" : "hidden"}`}
                      >
                        <strong>Takeoff Distance:</strong>{" "}
                        {
                          fleet[selectedId].specifications.distances
                            .takeoffDistance
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.distances.landingDistance ? "" : "hidden"}`}
                      >
                        <strong>Landing Distance:</strong>{" "}
                        {
                          fleet[selectedId].specifications.distances
                            .landingDistance
                        }
                      </li>
                    </ul>
                  </div>
                  <div className="rounded flex flex-col align-middle items-center justify-center p-3 lg:p-9 bg-gray-50">
                    <h4 className="text-xl text-gray-900 font-bold">
                      Powerplant:
                    </h4>
                    <ul className="mt-3 list-disc list-inside text-gray-700">
                      <li
                        className={`${fleet[selectedId].specifications.powerplant.engines ? "" : "hidden"}`}
                      >
                        <strong>Engines:</strong>{" "}
                        {fleet[selectedId].specifications.powerplant.engines}
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.powerplant.engineManufacturer ? "" : "hidden"}`}
                      >
                        <strong>Engine Manufacturer:</strong>{" "}
                        {
                          fleet[selectedId].specifications.powerplant
                            .engineManufacturer
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.powerplant.engineModel ? "" : "hidden"}`}
                      >
                        <strong>Engine Model:</strong>{" "}
                        {
                          fleet[selectedId].specifications.powerplant
                            .engineModel
                        }
                      </li>
                      <li
                        className={`${fleet[selectedId].specifications.powerplant.horsepower ? "" : "hidden"}`}
                      >
                        <strong>Engine Power:</strong>{" "}
                        {fleet[selectedId].specifications.powerplant.horsepower}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
              Click into each plane to view its specs and capabilities
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid grid-cols-1 gap-y-12 lg:mx-0"
          >
            {fleet.map((plane, index) => (
              <li
                key={plane.id}
                className="hover:shadow-xl transition-shadow bg-gray-100 duration-300 ease-in py-4 rounded"
              >
                <a
                  className={`px-2 lg:px-6 cursor-pointer flex flex-wrap justify-between ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  onClick={() => {
                    setSelectedId(plane.id);
                    setShowModal(!showModal);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  <div className="w-full lg:w-3/5 aspect-square md:aspect-video lg:aspect-video overflow-hidden rounded">
                    <img
                      className="object-cover w-full h-full hover:scale-110 hover:brightness-110 transition-all duration-700 ease-out"
                      src={plane.images[0].src}
                      alt={plane.alt}
                    />
                  </div>
                  <div
                    className={`w-full lg:w-2/5 lg:px-0 flex flex-col justify-center align-middle text-center ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                  >
                    <h3
                      className={`mt-6 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"} w-full text-3xl font-bold leading-8 text-main-red`}
                    >
                      {plane.tailNumber}
                      <small> ({plane.name})</small>
                    </h3>
                    <p
                      className={`ml-0 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"}  w-full mt-1 text-base italic leading-7 text-gray-600`}
                    >
                      {plane.model}
                    </p>
                    <p
                      className={`ml-0 ${index % 2 === 0 ? "m-0 lg:ml-6" : "m-0 lg:mr-9 pr-9"} ${plane.rentalPrice ? "" : "hidden"} w-full mt-2 text-lg leading-7 text-main-red`}
                    >
                      Rate: ${plane.rentalPrice} <small>/hour</small>
                    </p>
                    <div
                      className={`flex mt-6 justify-center ${index % 2 === 0 ? "lg:justify-start lg:ml-6" : "lg:justify-end m-0 lg:mr-6"}`}
                    >
                      <a
                        href="https://forms.zohopublic.com/SummitFlight/form/SFARentalApplication/formperma/u_yUY7ZskEDNvEzx8P4BhNgX1rPaey6LAG_j3dhDnj0"
                        target="_blank"
                        className="btn-red"
                      >
                        Rent Now
                      </a>
                    </div>
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
