import { useState } from "react";

const FinancingTabs = () => {
  const [currentTab, setCurrentTab] = useState("Meritize");

  const meritize = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 overflow-hidden">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Meritize
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Don’t let finances limit your pilot aspirations
            </h3>
          </div>
          <img
            src="/meritize-logo.webp"
            alt="Meritize logo"
            className="h-24 w-48 md:w-64 object-cover"
          />
        </div>
        <div className="tracking-wider">
          <p className="pt-5">
            Red Arrow has teamed up with the Meritize platform* to offer our
            students a unique financing option. Meritize works with students,
            educators, and employers to help people excel in skills-based
            careers.
          </p>
          <p className="pt-5">
            Meritize knows you are more than your credit score, and that is why
            they look at your past achievements to enhance your loan options.
          </p>
          <p className="pt-5">
            A few reasons why the Meritize Platform is a great option for
            students include:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Fixed and variable interest rates available** Flexible payment
              options, including deferring full principal and interest payments
              until 3 months after you complete your training
            </li>
            <li>Customer support is available 6 days a week</li>
            <li>0.25% interest rate deduction if you sign up for autopay***</li>
          </ul>
          <p className="pt-5">With a Meritize loan, you can...</p>
          <ul className="list-disc pl-10">
            <li>
              Use your transcript to enhance your credit and improve your loan
              options
            </li>
            <li>Get pre-approved in minutes</li>
            <li>Fund the full cost of attendance on your own merit</li>
            <li>Choose affordable fixed or variable rates</li>
            <li>
              Repayment terms are flexible by offering deferred payment
              schedules while you are in school
            </li>
            <li>Loan terms up to 20 years</li>
            <li>
              Avoid prepayment penalty fees if you choose to pay your loan off
              early
            </li>
            <li>
              Get access to free Meritize Career Success Services for job and
              career support
            </li>
          </ul>
          <p className="pt-5">
            Checking your loan options with Meritize has never been easier. You
            can fill out a short application to check your loan options without
            impacting your credit score.
          </p>
          <p className="pt-5">
            If loan options are available to you, Meritize will request your
            merit information to finalize your application. This could be in the
            form of:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Academic Experience (Official or unofficial transcript or HSE
              certification)
            </li>
            <li>Military Experience (DD214)</li>
          </ul>
          <p className="pt-5">
            Want to learn more? Check out their FAQ page here:
            <a
              href="https://www.meritize.com/students/faq/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.meritize.com/students/faq/
            </a>{" "}
            or give them a call at 833-MERIT-4-U.
          </p>
          <p>
            Ready to see if you qualify? Check your options here:
            <a
              href="https://apply.meritize.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://apply.meritize.com/
            </a>
          </p>
          <p className="pt-5">
            *Red Arrow Flight Academy does not endorse a particular lender, nor
            is it affiliated with Meritize Financial, Inc. ("Meritize") or the
            Meritize platform.
          </p>
          <p className="pt-5 text-xs">
            Meritize Lending, LLC, NMLS ID 1661035 (NMLS Consumer Access
            <a
              href="https://www.nmlsconsumeraccess.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.nmlsconsumeraccess.org/
            </a>
            )
          </p>
          <p className="pt-1 text-xs">
            Meritize Financial, Inc. NMLS ID 1986399 (NMLS Consumer Access
            <a
              href="https://www.nmlsconsumeraccess.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.nmlsconsumeraccess.org/
            </a>
            )
          </p>
          <p className="pt-1 text-xs">
            Terms and Conditions apply. Meritize branded loan products are
            educational loans issued by Meritize Lending, LLC**. Meritize
            reserves the right to modify or discontinue products and benefits at
            any time without notice. To qualify, a borrower must be a U.S.
            citizen, permanent resident or hold an Employment Authorization
            Document and meet Meritize’s underwriting requirements. If approved
            for a loan the actual loan amount, term, payment, and APR amount of
            loan that a customer qualifies for may vary based on credit
            determination, state law, and other factors. Meritize does not
            warrant or guarantee any claims made herein, including, but not
            limited to, gaining admission to a program, concerning the quality
            or financial strength of any educational institution, securing
            funding or obtaining employment. Our final loan offer may differ as
            a result of the school chosen and the associated cost of tuition.
            Not all schools are eligible for funding. Meritize does not offer
            educational loans in the following states: IN, ME, ND, NV, SD, VT,
            WI, WV, WY, PR. All rights reserved.
          </p>
          <p className="pt-1 text-xs">
            **For residents of SC, loan is made by Meritize Financial, Inc.
          </p>
          <p className="pt-1 text-xs">*Variable rates are subject to change.</p>
          <p className="pt-5">
            Red Arrow has teamed up with the Meritize platform* to offer our
            student’s a unique financing option. Meritize works with students,
            educators, and employers to help people excel in skills-based
            careers.
          </p>
          <p className="pt-5">
            Meritize knows you are more than your credit score, and that is why
            they look at your past achievements to potentially enhance your loan
            options.
          </p>
          <p className="pt-5">
            A few reasons why the Meritize Platform is a great option for
            students include:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Fixed and variable interest rates available** Flexible payment
              options, including deferring full principal and interest payments
              until 3 months after you complete your training
            </li>
            <li>Customer support available 6 days a week</li>
            <li>0.25% interest rate deduction if you sign up for autopay***</li>
          </ul>
          <p className="pt-5">
            Checking your loan options with Meritize has never been easier. You
            can fill out a short application to check your loan options without
            impacting your credit score.
          </p>
          <p className="pt-5">
            If loan options are available to you, Meritize will request your
            merit information to finalize your application. This could be in the
            form of:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Academic Experience (Official or unofficial transcript or HSE
              certification)
            </li>
            <li>Military Experience (DD214)</li>
          </ul>
          <p className="pt-5">
            Want to learn more? Check out their FAQ page here:
          </p>
          <p>
            <a
              href="https://www.meritize.com/students/faq/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.meritize.com/students/faq/
            </a>{" "}
            or give them a call at 833-MERIT-4-U.
          </p>
          <p>
            Ready to see if you qualify? Check your options here:
            <a
              href="https://apply.meritize.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://apply.meritize.com/
            </a>
          </p>
          <p className="pt-5">
            *Red Arrow Flight Academy does not endorse a particular lender, nor
            is it affiliated with Meritize Financial, Inc. ("Meritize") or the
            Meritize platform.
          </p>
          <p className="pt-5 text-xs">
            Meritize Lending, LLC, NMLS ID 1661035 (NMLS Consumer Access
            <a
              href="https://www.nmlsconsumeraccess.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.nmlsconsumeraccess.org/
            </a>
            )
          </p>
          <p className="pt-1 text-xs">
            Meritize Financial, Inc. NMLS ID 1986399 (NMLS Consumer Access
            <a
              href="https://www.nmlsconsumeraccess.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-800 hover:underline text-blue-600"
            >
              https://www.nmlsconsumeraccess.org/
            </a>
            )
          </p>
          <p className="pt-1 text-xs">
            Terms and Conditions apply. Meritize branded loan products are
            educational loans issued by Meritize Lending, LLC**. Meritize
            reserves the right to modify or discontinue products and benefits at
            any time without notice. To qualify, a borrower must be a U.S.
            citizen, permanent resident or hold an Employment Authorization
            Document and meet Meritize’s underwriting requirements. If approved
            for a loan the actual loan amount, term, payment, and APR amount of
            loan that a customer qualifies for may vary based on credit
            determination, state law, and other factors. Meritize does not
            warrant or guarantee any claims made herein, including, but not
            limited to, gaining admission to a program, concerning the quality
            or financial strength of any educational institution, securing
            funding or obtaining employment. Our final loan offer may differ as
            a result of the school chosen and the associated cost of tuition.
            Not all schools are eligible for funding. Meritize does not offer
            educational loans in the following states: IN, ME, ND, NV, SD, VT,
            WI, WV, WY, PR. All rights reserved.
          </p>
          <p className="pt-1 text-xs">
            **For residents of SC, loan is made by Meritize Financial, Inc.
          </p>
          <p className="pt-1 text-xs">*Variable rates are subject to change.</p>
        </div>
      </div>
    </section>
  );

  const stratusFinancial = (
    <>
      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
            <div>
              <h2 className="text-5xl font-semibold text-center tracking-tight">
                Finance with Stratus Financial
              </h2>
              <h3 className="pt-3 text-2xl text-center">
                Leverage financial support here
              </h3>
            </div>
            <img
              src="/stratus-logo-2.webp"
              alt="Stratus Financial logo"
              className="h-16 md:h-20"
            />
          </div>
          <div className="tracking-wider">
            <p className="pt-5">
              Red Arrow Flight Academy is pleased to partner with Stratus
              Financial to make pilot training more affordable for our
              interested students! Take advantage of Stratus Financial’s unique
              loan structures and get up in the air in no time.
            </p>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <p className="pt-5 font-semibold">Student Requirements</p>
                <ul className="list-disc pl-10">
                  <li>Must be a US Citizen or Permanent Resident*</li>
                  <li>Paystubs for the past two (2) months</li>
                  <li>Bank Statements for the past two (2) months</li>
                  <li>Driver's License</li>
                  <li>
                    Name & contact number of employer (for employee
                    verification)
                  </li>
                  <li>1st or 2nd class Medical Certificate</li>
                  <li>Co-borrower Recommended</li>
                  <li>Pilot Certificate, if applicable</li>
                  <li>Subject to Credit Check and Underwriting</li>
                </ul>
                <p className="pt-5 italic">
                  *If non-US citizen, TSA verification is required.
                </p>
              </div>
              <div className="flex-1">
                <p className="md:pt-5 font-semibold">Loan Process</p>
                <ol className="pl-10 list-decimal">
                  <li>Application</li>
                  <li>Processing</li>
                  <li>Underwriting</li>
                  <li>Approval</li>
                  <li>Funding</li>
                  <li>Pilot Training</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-auto">
        <img
          src="/img/financing/stratus-financial-banner.webp"
          alt="Stratus Financial Banner"
          className="min-w-[80rem]"
        />
      </div>

      <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
        <div className="max-w-7xl px-10 flex flex-col items-center py-10">
          <h2 className="text-3xl font-semibold text-center tracking-tight pb-10">
            FAQs
          </h2>
          <div className="tracking-wider">
            <p className="font-semibold pt-5">
              What factors does Stratus Financial consider?
            </p>
            <p>
              We base our loan approval on the borrower and co-borrower’s (e.g.
              parents, siblings, friends) merit on the following:
            </p>
            <ul className="list-disc pl-10">
              <li>FICO score</li>
              <li>Current income while in school</li>
              <li>Assets</li>
            </ul>
            <p>
              We can consider 2 out of 3 of these factors depending on the
              borrower's financial capacity.
            </p>
            <p className="font-semibold pt-5">
              How soon can I be approved for my loan?
            </p>
            <p>
              We do initial underwriting within 1-2 hours. If all documents
              required are submitted to us, we process and prepare the final
              loan documents within one (1) day. We fund the loan within three
              (3) business days after all parties have signed the loan
              documents.
            </p>
            <p className="font-semibold pt-5">
              Will there be a penalty for paying off the loan early in the
              future?
            </p>
            <p>You may repay the loan in whole or in part without penalty.</p>
            <p className="font-semibold pt-5">
              Are there any prerequisites to applying for a loan? (e.g. is it a
              pre-requisite to have a co-signer?)
            </p>
            <p>
              We only require applicants to complete the Loan Application Form
              to apply. Once you have filled it out, we would determine if the
              information you provided would require you to have a co-borrower
              to qualify.
            </p>
            <p className="font-semibold pt-5">
              How will the funds be transferred?
            </p>
            <p>Stratus Financial pays directly to your school.</p>
          </div>
          <div className="pt-10 self-start">
            <h3 className="font-semibold text-xl">Additional Resources</h3>
            <ul className="list-disc pl-10">
              <li>
                <a
                  href="../../public/files/stratus-financial-brochure.pdf"
                  download="stratus-financial-brochure.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Finacial Brochure
                </a>
              </li>
              <li>
                <a
                  href="../../public/files/stratus-financial-booklet.pdf"
                  download="stratus-financial-booklet.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Finacial Booklet
                </a>
              </li>
              <li>
                <a
                  href="../../public/files/stratus-financial-one-page.pdf"
                  download="stratus-financial-one-page.pdf"
                  className="hover:text-blue-800 hover:underline text-blue-600"
                >
                  Stratus Finacial One-Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );

  const flightTrainingFinance = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Flight Training Finance LLC
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Don’t let finances be the limiting factor
            </h3>
          </div>
          <img
            src="/ftf-logo.webp"
            alt="Flight Training Finance logo"
            className="h-12 sm:h-16 md:h-20"
          />
        </div>
        <div className="tracking-wider">
          <p className="pt-5">
            Embarking on your journey to becoming a pilot is an exciting
            endeavor, and at Red Arrow, we understand the importance of making
            flight training accessible to everyone. That's why we've partnered
            with Flight Training Finance to offer tailored financing solutions
            designed to support your flight goals.
          </p>
          <p className="pt-5 font-semibold text-xl">
            Why Choose Flight Training Finance?
          </p>
          <ul className="list-disc pl-10 pt-5">
            <li>
              <strong>Personalized Solutions:</strong> We believe that every
              student's journey is unique. With Flight Training Finance, you'll
              have access to financing options customized to your individual
              needs and circumstances.
            </li>
            <li>
              <strong>Guidance Every Step of the Way:</strong> Our user-friendly
              Flight Training Finance Application walks you through the process,
              ensuring clarity and simplicity as you apply for financing.
            </li>
            <li>
              <strong>Flexible Payment Plans:</strong> Whether you're looking to
              spread out your payments or make a larger down payment, our Yellow
              Sheet calculation tool allows you to explore different payment
              scenarios, empowering you to find a plan that fits your budget.
            </li>
            <li>
              <strong>Transparent Terms:</strong> Rest assured that with the
              Retail Installment Contract, you'll have a clear understanding of
              the terms of your financing agreement, providing peace of mind as
              you pursue your dreams.
            </li>
          </ul>
          <p className="pt-5">
            If you are interested in getting started, please click{" "}
            <a
              href="https://www.flighttrainingfinancellc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 hover:underline text-blue-600 font-semibold"
            >
              here
            </a>{" "}
            to apply now.
          </p>
          <p className="pt-10 font-semibold text-xl">Partnering for Success</p>
          <p className="pt-5">
            Red Arrow and Flight Training Finance have come together to
            streamline the financing process, making flight training more
            accessible to aspiring pilots like you. Take the first step towards
            your aviation goals by exploring our financing options today.
          </p>
          <p className="pt-5">
            Don't let financial barriers hold you back from reaching new
            heights. Start your journey with Red Arrow and Flight Training
            Finance.
          </p>

          <p className="pt-10 font-semibold text-xl">Additional Resources</p>
          <ul className="list-disc pl-10">
            <li>
              <a
                href="../../public/files/ftf-program-guide.pdf"
                download="ftf-program-guide.pdf"
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                Program Guide
              </a>
            </li>
            <li>
              <a
                href="../../public/files/ftf-brochure.pdf"
                download="ftf-brochure.pdf"
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                FTF Brochure
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-main-red focus:ring-main-red"
          defaultValue={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          <option>Meritize</option>
          <option>Stratus Financial</option>
          <option>Flight Training Finance</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <div
            className={`${currentTab === "Meritize" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            aria-current="page"
            onClick={() => setCurrentTab("Meritize")}
          >
            <span>Meritize</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Meritize" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "Stratus Financial" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Stratus Financial")}
          >
            <span>Stratus Financial</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Stratus Financial" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
          <div
            className={`${currentTab === "Flight Training Finance" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Flight Training Finance")}
          >
            <span>Flight Training Finance</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Flight Training Finance" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
        </div>
      </div>

      {currentTab === "Meritize" && meritize}
      {currentTab === "Stratus Financial" && stratusFinancial}
      {currentTab === "Flight Training Finance" && flightTrainingFinance}
    </div>
  );
};

export default FinancingTabs;
