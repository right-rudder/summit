import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const QuizModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleModal = () => {
    console.log(btnStyle);
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log(formData);

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("firstName");
    setUserName(name);

    const url = "";
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            toggleModal();
            document.body.style.overflow = "auto";
          }, 6300);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error(
          "Network error occurred while submitting the form:",
          error,
        );
      });
  };

  return (
    <>
      <button
        className={btnStyle}
        onClick={() => {
          toggleModal();
          document.body.style.overflow = "hidden";
        }}
      >
        {btnText}
      </button>
      {showModal && (
        <div id="quiz-modal" className="relative">
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            {!formSubmitted && (
              <div className="bg-white p-12 max-w-xl m-4 text-black rounded-md h-full overflow-y-auto">
                <h2 className="text-2xl text-center font-bold mb-1">
                  Flight Quiz
                </h2>
                <p className="text-center text-lg mb-4">
                  Please fill out the form below to get started.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      First Name
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      Last Name
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      Email Address
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      Phone Number
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        min={10}
                        max={10}
                        autoComplete="tel"
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-2 text-gray-800 font-semibold">
                        What inspires you to pursue a career as a pilot?{" "}
                        <small>(Check all that apply)</small>
                      </legend>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="passion"
                          name="passion"
                        />
                        <label htmlFor="passion">A passion for adventure</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="progrow"
                          name="progrow"
                        />
                        <label htmlFor="progrow">
                          Professional growth and opportunities
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="hobby"
                          name="hobby"
                        />
                        <label htmlFor="hobby">Personal hobby</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="other-pursue"
                          name="other-pursue"
                        />
                        <label htmlFor="other-pursue">
                          Other (please specify)
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="goals"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      What are your long-term goals within the aviation
                      industry?
                      <textarea
                        id="goals"
                        name="goals"
                        rows={2}
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-1 text-gray-800 font-semibold">
                        What is your current level of aviation experience?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="no-experience"
                          name="experience"
                          value="no-experience"
                        />
                        <label htmlFor="no-experience">
                          No prior experience with piloting aircraft
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="simulator-drone"
                          name="experience"
                          value="simulator-drone"
                        />
                        <label htmlFor="simulator-drone">
                          Experience with flight simulators or drones
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="flight-training"
                          name="experience"
                          value="flight-training"
                        />
                        <label htmlFor="flight-training">
                          Some flight training but haven't soloed yet
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="wants-checkride"
                          name="experience"
                          value="wants-checkride"
                        />
                        <label htmlFor="wants-checkride">
                          Currently working towards completing a checkride
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="louie"
                          name="experience"
                          value="louie"
                        />
                        <label htmlFor="louie">Louie</label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-1 text-gray-800 font-semibold">
                        Which learning style resonates with you the most?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="hands-on"
                          name="learnstyle"
                          value="hands-on"
                        />
                        <label htmlFor="hands-on">
                          Hands-on, practical learning
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visual"
                          name="learnstyle"
                          value="visual"
                        />
                        <label htmlFor="visual">
                          Visual learning through observation
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="reading"
                          name="learnstyle"
                          value="reading"
                        />
                        <label htmlFor="reading">
                          Learning through reading and studying materials
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-1 text-gray-800 font-semibold">
                        Do you prefer a structured learning environment with
                        clearly defined expectations, or a more flexible,
                        adaptable approach?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="structured"
                          name="approach"
                          value="structured"
                        />
                        <label htmlFor="structured">
                          I prefer a structured approach
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="flexible"
                          name="approach"
                          value="flexible"
                        />
                        <label htmlFor="flexible">
                          I prefer a flexible approach
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-2 text-gray-800 font-semibold">
                        What kind of guidance and support would you prefer from
                        your flight instructor?{" "}
                        <small>(Check all that apply)</small>
                      </legend>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="personalized"
                          name="personalized"
                        />
                        <label htmlFor="personalized">
                          A personalized approach tailored to my individual
                          learning needs and preferences
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="hands-on-constant"
                          name="hands-on-constant"
                        />
                        <label htmlFor="hands-on-constant">
                          Hands-on involvement from the instructor, with
                          constant feedback and guidance
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="structured-clear"
                          name="structured-clear"
                        />
                        <label htmlFor="structured-clear">
                          A structured approach with clear goals and objectives
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="guidance-confidence"
                          name="guidance-confidence"
                        />
                        <label htmlFor="guidance-confidence">
                          Supportive and encouraging guidance, with a focus on
                          building confidence
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="other-guidance"
                          name="other-guidance"
                        />
                        <label htmlFor="other-guidance">
                          Other (please specify)
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="winglift"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      Do you know how a wing generates lift?
                      <textarea
                        id="winglift"
                        name="winglift"
                        rows={2}
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="anything-else"
                      className="mb-1 text-gray-800 font-semibold"
                    >
                      Is there anything else you'd like us to know about your
                      interests or expectations regarding flight training?
                      <textarea
                        id="anything-else"
                        name="anything-else"
                        rows={2}
                        className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-1 text-gray-800 font-semibold">
                        Would you be interested in scheduling a visit to Summit
                        Flight Academy?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-yes"
                          name="visit-us"
                          value="visit-yes"
                        />
                        <label htmlFor="visit-yes">Yes</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-no"
                          name="visit-us"
                          value="visit-no"
                        />
                        <label htmlFor="visit-no">No</label>
                      </div>
                    </fieldset>
                  </div>
                  <button className="btn-red w-full" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}

            {formSubmitted && (
              <div className="bg-white p-12 max-w-xl m-4 text-black rounded-md h-full overflow-y-auto text-center">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for filling the Quiz.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div className="text-green-700 text-5xl">✓</div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting Summit Flight Academy. We are looking
                  forward to working with you soon. We will review your message
                  and get back with you within 1-5 business days. <br />
                  <br />
                  You can also give us a call at{" "}
                  <a className="text-red-500" href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </a>{" "}
                  or
                  <br />
                  email us at{" "}
                  <a className="text-red-500" href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </p>
              </div>
            )}

            <button
              className="bg-main-red p-1 rounded-full absolute top-2 right-2"
              onClick={() => {
                toggleModal();
                document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose className="text-xl text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizModalButton;