import { Mail, Phone, MapPin } from "lucide-react";
import Contects from "./Faq";
import PhoneIcon from "../assets/Images/PhoneIcon.svg";
import MailIcon from "../assets/Images/MailIcon.svg";
import LocationIcon from "../assets/Images/LocationIcon.svg";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MailIcon, // Use the imported image file
      title: "Email",
      description: "For any inquiries, please contact us to the mail below",
      value: "support@mylabathome.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      description: "Call us during business hours for intermediate assistance",
      value: "+91-9266660208",
    },
    {
      icon: LocationIcon,
      title: "Location",
      description: "Call us during business hours for intermediate assistance",
      value: "C-34, Ground Floor, Sector-2, Noida",
    },
  ];

  return (
    <>
      <Contects />
      <section className="container mx-auto  px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon with Circle Background */}
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full ransition-transform duration-300 ease-in-out hover:scale-105">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-xls font-bold text-[#D0343C] mt-4">{item.title}</h3>

              {/* Description */}
              <p className="text-[#7B7878] font-regular text-sm mt-2 w-[267px] flex justify-centre">{item.description}</p>

              {/* Value (Bold) */}
              <p className="mt-4 text-[#272121] text-ms font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactSection;
