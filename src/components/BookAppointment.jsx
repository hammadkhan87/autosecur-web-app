import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { booking } from "../assets/images";
import Wrapper from "./ui/Wrapper";

const BookAppointment = () => {
  return (
    <section className="py-20">
      <Wrapper className="px-4 md:px-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="p-2">
            <img
              src={booking}
              alt="book an appointment"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body justiy-start items-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-bold">
              Let's talk.
            </h2>
            <p className="text-slate-700 text-lg">
              Real added value through process automation from autosecure.
              Arrange your free consultation appointment now.
            </p>
            <div className="card-actions mt-6 lg:mt-0">
              <Link className="btn lowercase md:text-lg">
                make an appointment{" "}
                <FaCalendarCheck size={20} className="ml-5" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BookAppointment;
