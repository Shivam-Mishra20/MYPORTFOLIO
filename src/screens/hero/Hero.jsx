import { FaXTwitter } from "react-icons/fa6";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import React, { Suspense } from 'react';

export const Hero = () => {
    const socialIcons = [
        {
            id: 1,
            icon: <FaXTwitter size={17} />,
            href: '/',
        },
        {
            id: 2,
            icon: <PiDribbbleLogoFill size={20} />,
            href: '/',
        },
        {
            id: 3,
            icon: <FaLinkedinIn size={20} />,
            href: 'https://www.linkedin.com/in/shivam-mishra-2785132b2/',
        },
        {
            id: 4,
            icon: <IoLogoGithub size={20} />,
            href: 'https://github.com/Shivam-Mishra20',
        },
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            toast.success('CV downloaded successfully!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, 1000);
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'bounce', stiffness: 50, damping: 20 } },
    };

    const staggerContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <>
            <section className="hero-section" id="hero-section">
                <div className="intro_text">
                    <svg viewBox="0 0 1320 300">
                        <text x="50%" y="50%" textAnchor="middle">
                            hi
                        </text>
                    </svg>
                </div>
                <div className="containercs">
                    <motion.div
                        className="content flexSB"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainerVariants}
                    >
                        <motion.div className="left max-w-[500px] w-full" variants={itemVariants}>
                            <div className="hero-content-box">
                                <span className="hero-sub-title">I am Shivam Mishra</span>
                                <h1 className="hero-title">
                                    Web Developer + <br />
                                    UX Designer
                                </h1>
                                <p className="lead mt-3">
                                    I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                                </p>
                                <div className="button-box flexG">
                                    <button className="btn tj-btn-secondary" onClick={handleDownload}>
                                        Download CV
                                    </button>
                                    <ul className="ul-reset social-icons">
                                        {socialIcons.map((icon) => (
                                            <li key={icon.id}>
                                                <a href={icon.href}>{icon.icon}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="right w-half" variants={itemVariants}>
                            <div className="hero-image-box text-center">
                                {/* Lazy-loaded image */}
                                <Suspense fallback={<div>Loading Image...</div>}>
                                    <img src="images/logo/shivam.jpg" alt="logo" className="w-[290px] sm:w-[400px]" loading="lazy" />
                                </Suspense>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="funfact-area grid4" initial="hidden" animate="visible" variants={staggerContainerVariants}>
                        {hero.map((item, index) => (
                            <motion.div className="funfact-item" key={index} variants={itemVariants}>
                                <div className="number text-center">
                                    <span><CountUp start={0} duration={3.80} end={item.text} /></span>
                                </div>
                                <div className="text text-center ">{item.title}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </section>
        </>
    );
};
