import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import DoctorImage from "../assets/Images/faqImages.png"; // Replace with actual image path
import Populartest from "./Populartest";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book a Lab Test?",
      answer:
        "Booking is simple! Visit our website’s booking page, select the service you need, and pick a time that works best for you.",
    },
    {
      question: "How do I book a Lab Test?",
      answer: "You can book online through our website or mobile app.",
    },
    {
      question: "How do I book a Lab Test?",
      answer: "Call our support team, and they will assist you with booking.",
    },
    {
      question: "How do I book a Lab Test?",
      answer: "Visit our nearest lab center to book a test in person.",
    },
    {
      question: "How do I book a Lab Test?",
      answer: "Visit our nearest lab center to book a test in person. Booking is simple! Visit our website’s booking page, select the service you need, and pick a time that works best for you",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Populartest />
      <section className="container mx-auto px-6 py-10 ml-10">
        {/* Main Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Image Section (Ensure proper placement) */}
          <div className="relative ">
          <h2 className="text-2xl font-bold text-[#000000] mt-[10px] ml-[40px]">FAQ</h2>
            <p className="text-xls font-bold mt-2 ml-[40px]">Got Questions? We’ve Got Answers!</p>
            <p className="text-[#321F1F] font-regular text-xs mt-4 ml-[40px]">
              We're here to make your body test easy and stress-free. Explore our FAQs for <br />
              quick answers to common questions about our services, pricing, and more.
            </p>

            <img src={DoctorImage} alt="Doctor" className="w-[540px] h-[580px] mt-8 " />
          </div>

          {/* Right Side - FAQ Section */}
          <div className="mt-[50px]">
            <button className="px-6 py-2 bg-[#D0343C] text-[#FFFFFF] font-medium text-sm rounded-lg  mt-[-8px] ml-[420px] ">
              Explore Our Test
            </button>

            {/* FAQ Accordion */}
            <div className="mt-12">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#CACACA] py-3 cursor-pointer"
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[#272121] text-base font-medium mt-2">{faq.question}</h3>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openIndex === index && (
                    <p className="text-[#7B7878] text-base  font-regular mt-4 transition-all duration-300 ease-in-out">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full mt-4 border-t-8 boder-[#F6F6F6]">
</div>
    </>
  );
};

export default FAQSection;
