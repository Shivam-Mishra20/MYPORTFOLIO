import { linklist } from "../assets/data";
import { Link } from 'react-scroll'
export const Footer = () => {
    return (
        <>
            <footer className="tj-footer-area">
                <div className="containercs  ">
                    <div className="logo-box ">

                        <img src="../images/logo/logo1.png" alt="logo" />

                    </div>
                    <div className="footer-menu">
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
                                            duration={400}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="copy-text  text-center ">
                        <p>
                            &copy; 2024 All rights reserved by
                            <a href="#" target="_blank">
                                Shivam Mishra
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};