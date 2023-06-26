import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import { LuHome, LuContact, LuHardDrive } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
//https://react-icons.github.io/react-icons/icons?name=lu

const navItems = [
  { Icon: LuHome, label: "Home", href: "#main" },
  { Icon: GrProjects, label: "Work", href: "#work" },
  { Icon: LuHardDrive, label: "Projects", href: "#projects" },
  { Icon: BsPerson, label: "Resume", href: "#resume" },
  { Icon: LuContact, label: "Contact", href: "#contact" },
];

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const NavItems = ({ showLabel, className }) => (
    <>
      {navItems.map(({ Icon, label, href }) => (
        <a
          onClick={handleNav}
          key={href}
          href={href}
          className={`${className} flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110`}
        >
          <Icon size={20} />
          {showLabel && <span className="pl-4">{label}</span>}
        </a>
      ))}
    </>
  );
  NavItems.propTypes = {
    showLabel: PropTypes.bool,
    className: PropTypes.string,
  };

  return (
    <div>
      <AiOutlineMenu
        className="absolute right-4 top-4 z-[99]"
        onClick={handleNav}
      />
      {nav ? (
        <div className="bg-green/90 fixed z-20 flex h-screen w-full flex-col items-center justify-center">
          <NavItems className="m-2" showLabel={true} />
        </div>
      ) : null}
      <div className="fixed top-[25%] z-10 hidden md:block">
        <div className="flex flex-col">
          <NavItems className="m-2" showLabel={false} />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
