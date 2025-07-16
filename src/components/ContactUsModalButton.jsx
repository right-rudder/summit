import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const ContactUsModalButton = ({
  btnStyle,
  btnText,
  btnSymbol,
  webhookUrl,
  apiKey,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const confirmEmail = formData.get("confirm-email")?.trim();
    if (confirmEmail) return;

    const name = formData.get("firstName");
    setUserName(name);

    const urlEncodedBody = new URLSearchParams(formData).toString();

    const jsonBody = {
      first_name: formData.get("firstName")?.trim() || "",
      last_name: formData.get("lastName")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      campaign: "contact_us",
      account_random_id: "ac_ftthqk4f",
    };

    try {
      const [ghlRes, portalRes] = await Promise.all([
        fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedBody,
        }),
        fetch("https://portal.rightruddermarketing.com/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify(jsonBody),
        }),
      ]);

      if (ghlRes.ok && portalRes.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          window.location.href = "/contact-confirmation";
        }, 3000);
      } else {
        console.error("Submission failed", {
          ghlStatus: ghlRes.status,
          portalStatus: portalRes.status,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
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
        {btnSymbol && <span aria-hidden="true">{btnSymbol}</span>}
      </button>
      {showModal && (
        <div className="z-30">
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center">
            {!formSubmitted && (
              <div className="relative bg-white p-12 max-w-xl text-black h-screen-4/5 rounded-md overflow-y-auto z-50">
                <button
                  className="bg-main-red p-1 rounded-full absolute top-2 right-2"
                  onClick={() => {
                    toggleModal();
                    document.body.style.overflow = "auto";
                  }}
                >
                  <IoMdClose className="text-xl text-white" />
                </button>
                <h2 className="text-3xl text-center font-bold mb-1">
                  Contact Us
                </h2>
                <p className="text-center text-lg mb-4">
                  We'll get back to you as soon as possible.
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
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      maxlength="500"
                      rows={4}
                      className="w-full p-2 border text-black bg-gray-100 border-gray-400 rounded"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mx-2"
                      id="career-track"
                      name="career-track"
                    />
                    <label htmlFor="career-track">
                      I am interested in the Summit Flight Academy{" "}
                      <a
                        className="text-main-red hover:text-gray-500 font-semibold"
                        href="/career/career-track"
                        target="_blank"
                      >
                        Career Track
                      </a>{" "}
                      (Zero to Hero) Program.
                    </label>
                  </div>
                  <button className="btn-red mt-6 w-full" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}

            {formSubmitted && (
              <div className="relative bg-white p-12 max-w-xl m-4 text-black rounded-md h-screen-4/5 overflow-y-auto">
                <button
                  className="bg-main-red p-1 rounded-full absolute top-2 right-2"
                  onClick={() => {
                    toggleModal();
                    document.body.style.overflow = "auto";
                  }}
                >
                  <IoMdClose className="text-xl text-white" />
                </button>
                <div className="text-center">
                  <h1 className="font-bold text-4xl py-10">
                    Thank you for contacting us, {userName}.
                  </h1>

                  <div className="flex flex-row justify-center">
                    <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                      <div className="text-green-700 text-5xl">✓</div>
                    </div>
                  </div>

                  <p className="px-5">
                    Thank you for contacting Summit Flight Academy. We are
                    looking forward to working with you soon. We will review
                    your message and get back with you within 1-5 business days.{" "}
                    <br />
                    <br />
                    You can also give us a call at{" "}
                    <a className="text-red-500" href={`tel:${PHONE_NUMBER}`}>
                      {PHONE_NUMBER}
                    </a>{" "}
                    or
                    <br />
                    email us at{" "}
                    <a
                      className="text-red-500"
                      href={`mailto:${EMAIL_ADDRESS}`}
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsModalButton;
