import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InternationProgramSteps = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={pagination}
      scrollbar={{ draggable: true }}
      className="w-full px-10"
    >
      <SwiperSlide className="p-12">
        <div className="flex flex-col mx-auto max-w-[50rem] gap-5">
          <h4 className="font-semibold text-xl">Step 1: Pre-Application</h4>
          <ol className="list-decimal flex flex-col gap-2">
            <li className="font-medium">
              Fill out the "Pre-Application" form to request your I-20. Ensure
              all information matches your identification exactly.
            </li>
            <li className="font-medium">
              Fill out the "Credit Card Authorization" form and email it with
              your "Pre-Application" form to eperalta@flyredarrow.com.
            </li>
            <ol className="list-disc pl-5">
              <li>
                The Credit Card Authorization form covers I-20 shipping,
                training material, registration charges, and a $500 security
                deposit.
              </li>
              <li>
                The security deposit is charged upon completing your training.
              </li>
              <li>
                Please note: You must maintain a positive account balance while
                in training. The security deposit does not count towards your
                balance.
              </li>
              <li>
                If you have to cancel your training date, you may forfeit some
                or all of your deposit:
              </li>
              <li>Cancellation more than 30 days in advance: $500 refund.</li>
              <li>Cancellation 30-20 days in advance: $400 refund.</li>
              <li>Cancellation 19-10 days in advance: $200 refund.</li>
              <li>Cancellation 9-0 days in advance: $0 refund.</li>
            </ol>
            <li className="font-medium">Download all files below:</li>
            <ol className="list-disc pl-5">
              <li>
                <a
                  href="/files/international-students-requirements-m1.pdf"
                  download="international-students-requirements-m1.pdf"
                  className="underline hover:text-blue-500"
                >
                  International Students Requirements M-1
                </a>
              </li>
              <li>
                <a
                  href="/files/affidavit-of-financial-support-ver1.pdf"
                  download="affidavit-of-financial-support-ver1.pdf"
                  className="underline hover:text-blue-500"
                >
                  Affidavit of Financial Suport ver1
                </a>
              </li>
              <li>
                <a
                  href="/files/financial-declaration-ver1.pdf"
                  download="financial-declaration-ver1.pdf"
                  className="underline hover:text-blue-500"
                >
                  Financial Declaration ver1
                </a>
              </li>
            </ol>
          </ol>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-12">
        <div className="flex flex-col mx-auto max-w-[50rem] gap-5">
          <h4 className="font-semibold text-xl">Step 2: Obtain Visa</h4>
          <ol className="list-decimal flex flex-col gap-2">
            <li className="font-medium">
              Upon receiving your I-20 by mail, pay the SEVIS processing fee of
              $235
            </li>
            <ol className="list-disc pl-5">
              <li>
                Log on to{" "}
                <a
                  href="https://www.ice.gov/sevis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  www.ice.gov/sevis
                </a>{" "}
                .
              </li>
              <li>Fill out Form I-901</li>
              <li>Pay the fee by credit card.</li>
              <li>Print a copy of the payment for your records.</li>
            </ol>
            <li className="font-medium">
              Make an appointment at the U.S. Embassy/Consulate and pay the fee
              over the phone via credit card.
            </li>
          </ol>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-12">
        <div className="flex flex-col mx-auto max-w-[50rem] gap-5">
          <h4 className="font-semibold text-xl">Step 3: TSA Requirements</h4>
          <ol className="list-decimal flex flex-col gap-2">
            <li className="font-medium">
              Email{" "}
              <a
                href="mailto:eperalta@flyredarrow.com"
                className="underline hover:text-blue-500"
              >
                eperalta@flyredarrow.com
              </a>{" "}
              before proceeding.
            </li>
            <li className="font-medium">
              Enroll on{" "}
              <a
                href="https://www.fts.tsa.dhs.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                FTSP
              </a>{" "}
              and apply for training requests based on your chosen program.
            </li>
            <ol className="list-disc pl-5">
              <li>Provider: Red Arrow Aviation, Santa Teresa, NM</li>
              <li>Training request course names:</li>
              <ul className="list-decimal list-inside pl-5">
                <li>Private Pilot (PPL01)</li>
                <li>Instrument Rating (INS01)</li>
                <li>Commercial Rating (COM01)</li>
              </ul>
              <li>Training Request Aircraft Type: Cessna 172</li>
              <li>Training Request Category: 3 (three)</li>
              <li>
                Training Request Date: One-year period (i.e., 10/01/21 to
                10/01/22)
              </li>
            </ol>
          </ol>
          <p>
            These specific details are crucial for a seamless TSA application
            process, ensuring accurate enrollment with Red Arrow Flight Academy
            for your chosen training program.
          </p>
          <p>
            All training requests are valid for 365 days from the date the
            candidate receives AFSP approval to train. After 365 days, a
            candidate must submit a new training request for any additional
            training he/she wishes to take, regardless if the training is on the
            same certificate or type rating.
          </p>
          <p>
            Once a candidate receives AFSP approval to train, he/she must begin
            training within 180 days and finish within 365 days of the approval
            date or must cease training on that request.
          </p>
          <p>
            ​Upon acceptance as a candidate, the TSA will direct you to be
            fingerprinted.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-12">
        <div className="flex flex-col mx-auto max-w-[50rem] gap-5">
          <h4 className="font-semibold text-xl">Step 4: Travel Arrangements</h4>
          <ol className="list-decimal flex flex-col gap-2">
            <li className="font-medium">
              Purchase airline tickets to El Paso International Airport (ELP) or
              Ciudad Juarez International Airport (CJS) if coming from Mexico.
            </li>
            <li className="font-medium">
              Explore housing options on apartments.com/el-paso-tx.
            </li>
            <li className="font-medium">
              Arrange rental cars; Enterprise Rent-A-Car is available with a
              local contact at 915-779-2260.
            </li>
          </ol>
          <p>
            Important Note: If you have a history of arrest or court
            appearances, additional paperwork is required.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default InternationProgramSteps;
