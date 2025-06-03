import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdAirplaneTicket } from "react-icons/md";

const OpenModalButton = ({ webhookUrl, apiKey }) => {
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

    const name = formData.get("first-name");
    setUserName(name);

    const urlEncodedBody = new URLSearchParams(formData).toString();

    const jsonBody = {
      first_name: formData.get("first-name")?.trim() || "",
      last_name: formData.get("last-name")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      campaign: "book",
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
          window.location.href = "/guide-confirmation";
        }, 2000);
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
      <button className="btn-red" onClick={toggleModal}>
        Download Our Free Guide
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-12 max-w-md m-4 text-black relative rounded-md">
            {!formSubmitted && (
              <>
                <h2 className="text-4xl text-gray-900 text-center font-bold mb-1">
                  Get the free guide
                </h2>
                <p className="mb-4 text-center text-gray-600">
                  Fill out the form below to get the free guide.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="first-name"
                      className="block mb-1 font-bold"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="last-name" className="block mb-1 font-bold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 font-bold">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>

                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" />
                    </label>
                  </p>

                  <button type="submit" className="btn-red w-full mt-8">
                    Get the guide
                  </button>
                </form>
              </>
            )}

            {formSubmitted && (
              <>
                <MdAirplaneTicket className="text-main-red text-9xl text-center mx-auto" />
                <h2 className="text-4xl font-bold mt-6 mb-4">
                  Thank you {userName}, for downloading our Quick Start Guide!
                </h2>
                <p className="mb-4 text-lg px-2">
                  You will receive an email with a download link shortly. Please
                  check your junk/spam folders if you do not receive anything
                  from us.
                </p>
                <img
                  src="/summit.webp"
                  alt="Summit Flight Academy Quick Start Guide"
                  className="mx-auto w-64 h-auto mt-6"
                />
              </>
            )}

            <button
              className="bg-main-red p-1 rounded-full absolute top-2 right-2"
              onClick={toggleModal}
            >
              <IoMdClose className="text-xl text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenModalButton;
