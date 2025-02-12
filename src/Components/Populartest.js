import React from "react";
import New from "./categoriestest";

const testCategories = [
  "Popular Package", "Full Body Check Up", "Senior Citizen", "Fitness", "Cancer", "Kidney", "Good Health"
];

const testPackages = [
  {
    name: "Full Body Silver Package (Women)",
    tests: [
      "Complete Blood C",
      "Whole Abdomen Ultra Sound",
      "Consultation",
      "Biopsy - Bone",
      "Glucose, Fasting, Plasma/ Urine"
    ],
    price: "₹1099",
    oldPrice: "₹2499",
    discount: "60% Off",
    plan: "Basic Plan"
  },
  {
    name: "Full Body Silver Package (Women)",
    tests: [
      "Complete Blood C",
      "Whole Abdomen Ultra Sound",
      "Consultation",
      "Biopsy - Bone",
      "Glucose, Fasting, Plasma/ Urine"
    ],
    price: "₹1099",
    oldPrice: "₹2499",
    discount: "60% Off",
    plan: "Basic Plan"
  },
  {
    name: "Full Body Silver Package (Women)",
    tests: [
      "Complete Blood C",
      "Whole Abdomen Ultra Sound",
      "Consultation",
      "Biopsy - Bone",
      "Glucose, Fasting, Plasma/ Urine"
    ],
    price: "₹1099",
    oldPrice: "₹2499",
    discount: "60% Off",
    plan: "Basic Plan"
  }
];

const PopularLabTests = () => {
  return (
    <>
      <New />
      <section className="w-full py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Lab Test & Profile</h2>
          {/* First Section: Scroll Right to Left */}
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide mb-6 ">
            {testCategories.map((category, index) => (
              <button key={index} className={`px-4 py-2 text-sm font-medium rounded-full ${index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}>
                {category}
              </button>
            ))}
          </div>

          {/* Second Section: Scroll Left to Right */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide mb-6 animate-scroll-left-right">
            {testPackages.map((pkg, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-72">
                <span className="bg-red-100 text-red-600 px-2 py-1 text-xs font-bold rounded-full mb-2 inline-block">{pkg.plan}</span>
                <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.tests.length} Tests are included</p>
                <ul className="text-gray-700 text-sm mb-4 list-disc pl-4">
                  {pkg.tests.map((test, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>➡</span>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-green-600">{pkg.price} <span className="text-gray-500 line-through text-sm">{pkg.oldPrice}</span></p>
                    <p className="text-green-500 text-xs font-semibold">{pkg.discount}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-3 py-2 text-xs font-medium rounded-md">View Details</button>
                    <button className="bg-red-500 text-white px-3 py-2 text-xs font-medium rounded-md">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularLabTests;
