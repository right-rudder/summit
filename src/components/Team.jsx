import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { team } from "../data/team";

export default function Team() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <section id="summit-team" className="relative">
      {showModal && selectedPerson && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => {
            setShowModal(false);
            setSelectedPerson(null);
            document.body.style.overflow = "auto";
          }}
        >
          <div
            className="bg-white pt-6 pb-12 px-9 rounded-md text-center text-black h-[99%] w-full max-w-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="aspect-[4/3] w-full rounded object-cover"
              src={selectedPerson.imageUrl}
              alt={selectedPerson.imageAlt}
            />
            <h3 className="mt-6 text-2xl font-bold leading-8 text-gray-900">
              {selectedPerson.name}
            </h3>
            <p className="text-base -mt-2 italic leading-7 text-gray-500">
              {selectedPerson.role}
            </p>
            {selectedPerson.paragrah1 && (
              <p className="mt-4 max-w-xl mx-auto text-lg leading-6 text-gray-600">
                {selectedPerson.paragrah1}
              </p>
            )}
            {selectedPerson.paragrah2 && (
              <p className="mt-2 max-w-xl mx-auto text-lg leading-7 text-gray-600">
                {selectedPerson.paragrah2}
              </p>
            )}
            {selectedPerson.paragrah3 && (
              <p className="mt-2 text-base leading-7 text-gray-600">
                {selectedPerson.paragrah3}
              </p>
            )}
            <button
              className="bg-main-red p-1 rounded-full absolute top-2 right-2"
              onClick={() => {
                setShowModal(false);
                setSelectedPerson(null);
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
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-main-red sm:text-4xl">
              Meet The Team
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li
                key={person.name}
                className="hover:shadow-2xl hover:bg-white transition-shadow duration-300 ease-in py-4 rounded-xl"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedPerson(person);
                    setShowModal(true);
                    document.body.style.overflow = "hidden";
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="overflow-hidden mx-auto h-56 w-56 rounded-full">
                    <img
                      className="object-cover w-full h-full hover:scale-110 hover:brightness-110 transition-all duration-700 ease-out"
                      src={person.imageUrl}
                      alt={person.imageAlt || person.name}
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
