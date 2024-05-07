import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const EnrollmentModalButton = ({ btnStyle, btnText }) => {
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

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("firstName");
    setUserName(name);

    const url =
      "https://services.leadconnectorhq.com/hooks/U9ULEEpmYvsaAGJyX7Wn/webhook-trigger/2IrB1WdH7C0efVNIoWzr";

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
        <div className="fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div
            className={`relative bg-white p-12 max-w-xl m-4 text-black rounded-md h-full ${window.scrollY >= 60 ? "lg:h-3/4" : "lg:h-3/5"} overflow-y-auto`}
          >
            <button
              className="bg-main-red p-1 rounded-full absolute top-2 right-2"
              onClick={() => {
                toggleModal();
                document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose className="text-xl text-white" />
            </button>
            {!formSubmitted && (
              <div>
                <h2 className="text-2xl text-center font-bold mb-1">
                  Enroll at Summit
                </h2>
                <p className="text-center text-lg mb-4">
                  Please fill out the form below.
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
                        Primary Training Program Interest?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="career-track"
                          name="interest"
                          value="career-track"
                          required
                        />
                        <label htmlFor="career-track">
                          Career Track Program
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="private-pilot"
                          name="interest"
                          value="private-pilot"
                          required
                        />
                        <label htmlFor="private-pilot">Private Pilot</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="instrument-rating"
                          name="interest"
                          value="instrument-rating"
                          required
                        />
                        <label htmlFor="instrument-rating">
                          Instrument Rating
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="instrument-pilot-bundle"
                          name="interest"
                          value="instrument-pilot-bundle"
                          required
                        />
                        <label htmlFor="instrument-pilot-bundle">
                          Private + Instrument Bundle
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="commercial-license"
                          name="interest"
                          value="commercial-license"
                          required
                        />
                        <label htmlFor="commercial-license">
                          Commercial License
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="cfi"
                          name="interest"
                          value="cfi"
                          required
                        />
                        <label htmlFor="cfi">CFI</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="multiengine"
                          name="interest"
                          value="multiengine"
                          required
                        />
                        <label htmlFor="multiengine">Multi Engine</label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-4">
                    <textarea
                      id="goal"
                      name="goal"
                      placeholder="What is your goal?"
                      rows={4}
                      className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                      required
                    />
                  </div>
                  <button className="btn-red w-full" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}

            {formSubmitted && (
              <div className="text-center">
                <h1 className="font-bold text-4xl py-10">
                  Thank you for Enrolling {userName}.
                </h1>

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
          </div>
        </div>
      )}
    </>
  );
};

export default EnrollmentModalButton;
