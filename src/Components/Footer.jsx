import { linklist } from "../assets/data";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <>
            <footer className="tj-footer-area">
                <div className="containercs">
                    <motion.div
                        className="logo-box"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="../images/logo/logo1.png" alt="logo" />
                    </motion.div>
                    <motion.div
                        className="footer-menu"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <nav>
                            <ul>
                                {linklist.map((link) => (
                                    <motion.li
                                        key={link.id}
                                        className="cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link
                                            activeClass="active"
                                            to={link.id}
                                            spy={true}
                                            smooth={true}
                                            offset={10}
                                            duration={400}
                                        >
                                            {link.text}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                    <motion.div
                        className="copy-text text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <p>
                            &copy; 2024 All rights reserved by
                            <a href="#" target="_blank"> Shivam Mishra</a>
                        </p>
                    </motion.div>
                </div>
            </footer>
        </>
    );
};
