import logo from './Assets/logo.png';

import { IoMenuOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdMicNone } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export default function Header() {

    return (
        <header className="flex fixed top-0 left-0 right-0 items-center justify-between bg-black h-16 px-4 lg:h-20 lg:px-8 shadow-md">
           
            <div className="flex items-center space-x-4">
                <i className="text-white text-2xl cursor-pointer">
                    <IoMenuOutline />
                </i>
                <img src={logo} alt="Logo" className="h-6 sm:h-8" />
            </div>

           
            <form className="flex items-center flex-grow space-x-2 mx-4 max-w-2xl">
                <input
                    type="text"
                    placeholder="Search"
                    className="rounded-full w-full h-8 p-3 text-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-500"
                />
                <i className="text-white text-2xl cursor-pointer">
                    <IoIosSearch />
                </i>
                <i className="text-white text-2xl cursor-pointer hidden sm:inline">
                    <MdMicNone />
                </i>
            </form>

         
            <div className="flex items-center space-x-4">
                <i className="text-white text-2xl cursor-pointer">
                    <FiVideo />
                </i>
                <i className="text-white text-2xl cursor-pointer">
                    <FaRegBell />
                </i>
                <i className="text-white text-2xl cursor-pointer">
                    <CgProfile />
                </i>
            </div>
        </header>
    );
}
