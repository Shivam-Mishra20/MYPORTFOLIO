import { useState, useEffect } from "react";
import { linklist } from "../assets/data";
import { Link } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons
import logopng from '../../public/images/logo/logo1.png'
import { NavLink } from "react-router-dom";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed


    useEffect(() => {
        const handleScroll = () => {

            const offset = window.scrollY;

            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const sucessalert = () => {
        toast.success(" Request Sent Successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }





    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <>

            <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}  `}>


                <div className="   containercs    md:w-[90vw]  flexSB">
                    <div className="logo-box">
                        <NavLink to="/">
                            <img src={logopng} alt="logo" />
                        </NavLink>
                    </div>



                    <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>

                        <nav>
                            <ul>
                                {linklist.map((link) => (
                                    <li key={link.id} className=" cursor-pointer ">
                                        <Link
                                            activeClass="active"
                                            to={link.id}
                                            spy={true}
                                            smooth={true}
                                            offset={10}
                                            duration={600}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>






                    <div className="   flexSB">
                        <div className="header-button" onClick={sucessalert}>
                            <div className="btn tj-btn-primary">
                                Hire me!
                            </div>
                        </div>
                        <div className="menu-icon" onClick={toggleMenu}>
                            {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
                        </div>
                    </div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </header>
        </>
    );
};