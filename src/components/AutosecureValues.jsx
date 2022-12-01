import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "./ui/Wrapper";

//

//

const AutosecureValues = () => {
  return (
    <section className="py-14">
      <Wrapper className="space-y-24">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Trust. Integrity.
          </h2>
          <p className="text-base md:text-xl xl:text-xl text-slate-800 md:max-w-2xl my-8">
            With autosecure you not only get leading technology-based automation
            solutions, but also a sincere partner that you can rely on at all
            times.
          </p>
          <Link className="text-xl flex items-center justify-center max-w-[10rem] border-b p-4 border-slate-800 gap-2 hover:bg-white">
            Our values
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Technology and process <br className="hidden lg:block" /> automation
            are in our DNA.
          </h2>
          <p className="text-base md:text-xl xl:text-xl text-slate-800 md:max-w-2xl my-8">
            Support our team and our clients with leading solutions to achieve
            real added value.
          </p>
          <Link className="text-xl flex items-center justify-center max-w-[10rem] border-b p-4 border-slate-800 gap-2 hover:bg-white">
            start career
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
            News about our projects and <br className="hidden lg:block" /> our
            company.
          </h2>
          <Link className="text-xl flex items-center justify-center max-w-[14rem] border-b p-4 border-slate-800 gap-2 hover:bg-white">
            show all news
            <FaChevronRight />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureValues;
