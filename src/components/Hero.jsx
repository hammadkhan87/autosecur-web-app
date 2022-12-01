import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";

const Hero = () => {
  return (
    <header className="pt-28 pb-14 bg-gray-200">
      <Wrapper className="space-y-6">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-5xl">
          Trust. Integrity.
        </h1>
        <p className="text-lg font-medium md:text-2xl md:max-w-lg leading-10">
          autosecure is your specialist for leading technology-based automation
          solutions for the automotive and mobility industry.
        </p>
        <p className="font-bold text-lg md:text-xl">
          We lower your costs. And increase your sales. Promised.
        </p>
        <Link className="btn lowercase text-lg">
          make an appointment <FaCalendarCheck size={20} className="ml-5" />
        </Link>
      </Wrapper>
    </header>
  );
};

export default Hero;
