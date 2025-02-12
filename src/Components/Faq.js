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
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <Populartest />
    <section className="container mx-auto px-6 py-10">
      {/* Main Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image Section */}
        <div className="relative">
          <img src={DoctorImage} alt="Doctor" className="w-full " />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
           
          </div>
        </div>

        {/* Right Side - FAQ List & Button */}
        <div>
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text-xl font-semibold mt-2">Got Questions? We’ve Got Answers!</p>
          <p className="text-gray-600 mt-2">
            We're here to make your body test easy and stress-free. Explore our FAQs for quick answers to common questions about our services, pricing, and more.
          </p>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700">
            Explore Our Test
          </button>

          {/* FAQ Accordion */}
          <div className="mt-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-3 cursor-pointer"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQSection;
