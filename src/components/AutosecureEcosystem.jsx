import { FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { logo } from "../assets/images";
import { styles } from "../Styles";

const AutosecureEcosystem = () => {
  const ecosystem = [
    "High-end web platform for integrating all autosecure services",
    "Software for the maximum simplification of business processes",
    "Cloud-based user account",
    "Considerable reduction of e-mail correspondence, telephone calls or search effort",
    "Centralized provision of information and vehicle documentation",
    "Maximum transparency and simplification of vehicle search processes",
  ];

  const experties = [
    "10+ years of know-how",
    "Leading in the development of software and future-oriented technologies",
    "Highly qualified staff",
    "Regular training and further education",
    "24/7 monitoring & service control center",
    "State-of-the-art video technology & IoT",
    "Interfaces for customer-specific ERP systems",
    "Specialized in leasing and financing models as well as insurance protection",
    "Data protection security",
    "Certified HIKVISION Platinum Partner",
    "Approval as a security company according to § 34a GewO",
  ];

  return (
    <section className="py-14">
      <Wrapper
        className={`${styles.flexBtw} gap-6 flex-col lg:flex-row items-stretch`}
      >
        <div className="card bg-white">
          <div className="card-body items-start justify-start">
            <figure className="flex-col">
              <img src={logo} alt="logo" className="w-36" />
              <h2 className="text-xl md:text-3xl font-bold text-slate-800">
                Eco system
              </h2>
            </figure>
            <div className="mt-10">
              {ecosystem.map((text, i) => (
                <li
                  className="flex items-start border-b border-gray-200 p-3 gap-2"
                  key={i}
                >
                  <FaCheck size={20} />
                  <p>{text}</p>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <div className="card-body items-start justify-start">
            <figure className="flex-col">
              <img src={logo} alt="logo" className="w-36" />
              <h2 className="text-xl md:text-3xl font-bold text-slate-800">
                expertise
              </h2>
            </figure>
            <div className="mt-10">
              {experties.map((text, i) => (
                <li
                  className="flex items-start justify-start border-b border-gray-200 p-3 gap-2"
                  key={i}
                >
                  <FaCheck size={20} />
                  <p>{text}</p>
                </li>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureEcosystem;
