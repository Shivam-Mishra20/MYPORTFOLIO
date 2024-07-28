import { useState, useEffect } from "react";
import { linklist } from "../assets/data";
import { Link } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logopng from '../../public/images/logo/logo1.png'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        toast.success("Request Sent Successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.header
                className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="containercs md:w-[90vw] flexSB">
                    <motion.div
                        className="logo-box"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <NavLink to="/">
                            <img src={logopng} alt="logo" />
                        </NavLink>
                    </motion.div>

                    <motion.div
                        className={`header-menu ${isMenuOpen ? "open" : ""}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <nav>
                            <ul>
                                {linklist.map((link) => (
                                    <motion.li
                                        key={link.id}
                                        className="cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
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
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>

                    <div className="flexSB">
                        <motion.div
                            className="header-button"
                            onClick={sucessalert}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="btn tj-btn-primary">
                                Hire me!
                            </div>
                        </motion.div>
                        <div className="menu-icon" onClick={toggleMenu}>
                            {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
                        </div>
                    </div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </motion.header>
        </>
    );
};
