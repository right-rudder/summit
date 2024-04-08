import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import EnrollmentForm from "./EnrollmentForm.astro";

const EnrollmentModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button className={btnStyle} onClick={toggleModal}>
        {btnText}
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-12 max-w-md m-4 text-black relative rounded-md">
            {!formSubmitted && (
              <>
                <h2 className="text-2xl text-center font-bold mb-1">
                  Contact Us
                </h2>
                <p className="text-center text-lg mb-4">
                  We'll get back to you as soon as possible.
                </p>
                <EnrollmentForm />
              </>
            )}

            {formSubmitted && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Thank you <span className="text-main-red">{userName}</span>,
                  for contacting us!
                </h2>
                <p className="mb-4">
                  We will get back to you as soon as possible. In the meantime,
                  feel free to check out our{" "}
                  <a href="/blog" className="text-main-red">
                    blog
                  </a>{" "}
                  for more information.
                </p>
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

export default EnrollmentModalButton;
