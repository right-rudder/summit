import { useState } from "react";
import Accordion from "./accordion";

export default function FAQs({ faqs }) {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-center capitalize text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="flex flex-col gap-2 mt-6">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                index={index}
                step={faq}
                toggled={faq.title === open}
                onShow={handleClick}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
