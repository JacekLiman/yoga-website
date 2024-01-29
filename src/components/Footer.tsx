import Logo from "../assets/img/logo.png";

import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center pb-10 lg:flex-row lg:justify-between">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <p>&copy; 2024. All rights reserved.</p>
          <div className="flex ">
            <div className="text-2xl text-orange p-2 hover:text-paragraph cursor-pointer">
              <FaYoutube />
            </div>
            <div className="text-2xl text-orange p-2 hover:text-paragraph cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-2xl text-orange p-2 hover:text-paragraph cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
