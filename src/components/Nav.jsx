import { Link } from "react-router-dom";
import { FaAt, FaPhoneVolume } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { logo } from "../assets/images";
import { navLinks } from "../data/constantData";
import { styles } from "../Styles";

const Nav = () => {
  return (
    <nav className="bg-white">
      <Wrapper className="navbar justify-between">
        <div>
          <img src={logo} alt="logo" className="w-36 object-cover" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 bg-white">
            {navLinks.map((item) => (
              <li tabIndex={item.id} key={item.id}>
                <Link to={`/${item.name}`}>
                  {item.name}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="bg-white">
                  {item.links.map((item, i) => (
                    <li key={i} className="hover:bg-blue-500">
                      <Link>{item}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.flex} gap-8`}>
          <Link>
            <FaAt size={25} />
          </Link>
          <Link>
            <FaPhoneVolume size={25} />
          </Link>
          <button className="btn btn-active">login</button>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;
