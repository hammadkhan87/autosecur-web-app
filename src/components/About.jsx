import { FaChevronRight, FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import { autosecureMobile, autosecureTower } from "../assets/images";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-14 bg-black">
      <Wrapper>
        <header>
          <h2 className="text-3xl text-white lg:text-5xl font-bold">
            Active mobile video surveillance of the{" "}
            <span className="text-blue-400">latest generation.</span>
          </h2>
        </header>
        <div
          className={`${styles.flexCenter} flex-col gap-8 lg:gap-32 lg:flex-row mt-4`}
        >
          <figure>
            <img
              src={autosecureTower}
              alt="autosecure-mobile"
              className="h-[60vh]"
            />
          </figure>
          <div className="space-y-10">
            <h2 className="text-white text-5xl font-bold lg:text-6xl">
              Mobile <br /> Security <br /> Tower
            </h2>
            <div className="space-y-5">
              <p className="text-xl text-white lg:text-2xl font-bold">
                <FaChevronRight className="inline-block text-blue-500" /> 100%
                sure.
              </p>
              <p className="text-xl text-white lg:text-2xl font-bold">
                <FaChevronRight className="inline-block text-blue-500" /> 100%
                flexible.
              </p>
              <p className="text-xl text-white lg:text-2xl font-bold">
                <FaChevronRight className="inline-block text-blue-500" /> 100%
                configurable.
              </p>
              <Link className="btn btn-lg gap-2">
                learn more
                <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.flexBtw} flex-col lg:flex-row gap-8 mt-12`}>
          <div className="space-y-8">
            <div className="flex gap-3">
              <FaCheck className="text-blue-500 w-14" />
              <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                Active mobile video surveillance with live perpetrator address
                to reduce access time to a minimum for maximum deterrence and
                minimum damage expenditure
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheck className="text-blue-500 w-14" />
              <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                Configurable camera equipment, variable and individual depending
                on the requirement
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheck className="text-blue-500 w-14" />
              <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                Precise alarm thanks to artificial intelligence in the cameras
                with a real alarm rate of 95%
              </p>
            </div>
          </div>

          <figure>
            <img src={autosecureMobile} alt="autosecure-mobile" />
          </figure>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
