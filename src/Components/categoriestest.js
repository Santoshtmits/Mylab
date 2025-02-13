import heartIcon from "../assets/Images/Cardiology.svg"; 
import bloodIcon from "../assets/Images/Blood.svg";
import diabetesIcon from "../assets/Images/Diabetes.svg";
import thyroidIcon from "../assets/Images/Thyroid.svg";
import kidneyIcon from "../assets/Images/Kidney.svg";
import liverIcon from "../assets/Images/Liver.svg";
import Home from "./Navhome";

const TestCategories = () => {
  const categories = [
    { name: "Cardiology", icon: heartIcon },
    { name: "Blood", icon: bloodIcon },
    { name: "Diabetes", icon: diabetesIcon },
    { name: "Thyroid", icon: thyroidIcon },
    { name: "Kidney", icon: kidneyIcon },
    { name: "Liver", icon: liverIcon },
  ];

  return (
    <>
      <Home />
      <section className="w-full py-10 bg-[#F8F8F8] ">
        <div className="max-w-7xl mx-auto px-14">
          <h2 className="text-2xl font-bold text-[#272121] mb-6">Test's by MyLab</h2>
          <div className="flex flex-wrap justify-start gap-4 ">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-lg flex flex-col items-center p-4 min-w-[180px]  transition-transform transform hover:scale-110"
              >
                <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2" />
                <p className="text-[#000000] text-ms font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestCategories;
