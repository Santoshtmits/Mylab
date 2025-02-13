import React from "react";
import Categories from "./categoriestest";
import healthIcon from "../assets/Images/HealthIcon.svg";
import IconButton from "../assets/Images/Group.svg";

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
      <Categories />
      <section className="w-full py-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section with View All */}
          <div className="flex justify-between items-center mb-6 ml-4">
            <h2 className="text-2xl font-bold text-[#000000]">Popular Lab Test & Profile</h2>
          </div>

          {/* Categories Section */}
          <div className="flex justify-between items-center mb-6 ml-4">
            {/* Left-Aligned Categories */}
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {testCategories.map((category, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                    index === 0 
                      ? 'bg-[#272121] text-[#FFFFFF] border-[#272121]' // Active Button
                      : 'bg-[#FFFFFF] text-[#838383] border-[#838383]' // Default Button
                  }`}
                >
                  {category} 
                </button>
              ))}
            </div>

            {/* Right-Aligned "View All" Button */}
            <button className="text-red-500 font-medium text-sm hover:underline">
              View All
            </button>
          </div>
          {/* Packages Section - Auto Scroll without Manual Scroll */}
          <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll-left-right">
           {testPackages.map((pkg, index) => (
          <div
          key={index}
          className="bg-[#FFFFFF] shadow-[0px_4px_10px_rgba(0,0,0,0.3)] rounded-lg p-6 w-[400px] h-[485px]"
          >
        {/* Package Plan with Icon */}
        <div className="flex items-center space-x-3 bg-[#D0343C] bg-opacity-10 text-[#272121] mb-4 px-2 py-1 text-ss font-small rounded-full mb-2 w-fit">
          <img src={healthIcon} alt="Health Icon" className="w-4 h-4" />
          <span>{pkg.plan}</span>
        </div>
        
        <h3 className="text-xls font-bold text-[#000000] mt-2 mb-2">{pkg.name}</h3>
        <p className="text-[#321F1F] font-medium text-sm mb-4">{pkg.tests.length}  Tests are included</p>

        <ul className="text-[#321F1F] text-sm font-regular mb-6 list-disc">
          {pkg.tests.map((test, i) => (
            <li key={i} className="flex items-center space-x-4 mb-2">
              <img src={IconButton} alt="Icon Button" className="w-3 h-3" />
              <span>{test}</span>
            </li>
          ))}
        </ul>

        {/* Pricing & Buttons */}
        <div className="flex flex-col space-y-3">
          {/* Price Section */}
          <div>
            <p className="text-xls font-bold text-[#000000]">
              {pkg.price} <span className="text-[#000000] line-through text-sm font-regular">{pkg.oldPrice}</span>
            </p>
            <button className=" bg-[#34C759] bg-opacity-10 text-[#34C759] text-sm font-medium rounded-lg w-[80px] h-[36px">{pkg.discount}</button>
          </div>

          {/* Buttons - Now in a new row */}
          <div className="flex space-x-6">
            <button className="bg-[#FFFFFF] text-[#000000] border border-[#DCDCDC] px-3 py-2 w-[140px] h-[40px] text-xs font-medium rounded-full">
              View Details
            </button>
            <button className="bg-[#D0343C] text-[#FFFFFF] px-3 py-2 w-[140px] h-[40px] text-xs font-medium rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
      </section>
    </>
  );
};

export default PopularLabTests;
