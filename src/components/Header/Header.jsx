import {
    Bars3BottomRightIcon,
    BoltIcon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuBar, setMenuBar] = useState(false);
    return (
        <nav className="bg-gray-200 ">
            <div className="flex justify-between items-center h-16 px-4 md:px-7 lg:px-10">
                <div className="inline-flex items-center">
                    <BoltIcon className="w-9 text-blue-500" />
                    <span className="text-2xl font-bold">nextPage</span>
                </div>
                <div className="hidden md:flex gap-7 font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/books"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Books
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        About Us
                    </NavLink>
                </div>
                <span
                    onClick={() => setMenuBar(!menuBar)}
                    className="w-10 md:hidden cursor-pointer"
                >
                    {menuBar ? (
                        <XMarkIcon></XMarkIcon>
                    ) : (
                        <Bars3BottomRightIcon />
                    )}
                </span>
            </div>
            <div>
                <div
                    className={`duration-200 ease-in flex flex-col z-10 gap-2 font-bold py-5 bg-gray-200 px-4 w-full md:hidden absolute ${
                        menuBar ? "top-15" : "-top-[500px]"
                    } transition-all`}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/books"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Books
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
