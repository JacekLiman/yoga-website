import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";

import { BiMenu } from "react-icons/bi";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);


  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 10 ? setIsScrolling(true) : setIsScrolling(false)
      })
  },[])
  return (
    <header className={`${isScrolling  ? "top-0":"top-5"}  fixed w-full left-0 transition-all duration-500`}>
      <div className="p-3 lg:w-9/12 w-11/12 mx-auto flex justify-between bg-white rounded-md relative shadow-xl">
        <div className="flex items-center gap-14">
          <div>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <Nav />
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm btn btn-sm bg-transparent border border-transparent hover:border-paragraph transition-all">
            Sign In
          </button>
          <button className="text-sm btn btn-sm bg-orange-100 text-orange border border-orange hover:text-white hover:bg-orange transition-all">
            Sign Up
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl lg:hidden"
          >
            <BiMenu />
          </button>
        </div>

        <div className="absolute top-full left-0 lg:hidden w-full  bg-white">
          <NavMobile isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
