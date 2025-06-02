import Image from "next/image";
import LogoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255),rgb(41,216,255),rgb(255,253,128),rgb(248,154,191),rgb(252,214,255))] blur-md"></div>
            <Image src={LogoImage} alt="Saas Logo" className="w-12 h-12 relative"/>
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a href="#about" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
            <a href="#features" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
            <a href="#updates" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
            <a href="#help" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
            <a href="#customers" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
            <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
