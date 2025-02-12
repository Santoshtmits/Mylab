import { Mail, Phone, MapPin } from "lucide-react";
import Contects from "./Faq"

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail size={30} className="text-red-600" />,
      title: "Email",
      description: "For any inquiries, please contact us to the mail below",
      value: "+91-9266660208",
    },
    {
      icon: <Phone size={30} className="text-red-600" />,
      title: "Phone",
      description: "Call us during business hours for intermediate assistance",
      value: "support@mylabathome.com",
    },
    {
      icon: <MapPin size={30} className="text-red-600" />,
      title: "Location",
      description: "Call us during business hours for intermediate assistance",
      value: "C-34, Ground Floor, Sector-2, Noida",
    },
  ];

  return (
    <>
    <Contects />
    <section className="container mx-auto px-6 py-10">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon with Circle Background */}
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-red-600 mt-4">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{item.description}</p>

            {/* Value (Bold) */}
            <p className="mt-2 font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ContactSection;
