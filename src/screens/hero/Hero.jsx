import { FaXTwitter } from "react-icons/fa6";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Hero = () => {
    const socialIcons = [
        {
            id: 1,
            icon: <FaXTwitter size={17} />,

        },
        {
            id: 2,
            icon: <PiDribbbleLogoFill size={20} />,
        },
        {
            id: 3,
            icon: <FaLinkedinIn size={20} />,
            href: 'https://www.linkedin.com/in/shivam-mishra-2785132b2/'
        },
        {
            id: 4,
            icon: <IoLogoGithub size={20} />,
            href: 'https://github.com/Shivam-Mishra20'
        },
    ];
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/RESUME L.pdf'; // Directly specify the relative path
        link.download = 'RESUME L.pdf'; // Optional: specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success toast
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
        }, 1000)
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
                    <div className="content flexSB">
                        <div className="left  max-w-[500px] w-full">
                            <div className="hero-content-box">
                                <span className="hero-sub-title">I am Shivam Mishra</span>
                                <h1 className="hero-title">
                                    Web Developer + <br />
                                    UX Designer
                                </h1>



                                <p className="lead mt-3 ">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                                <div className="button-box flexG">
                                    <button className="btn tj-btn-secondary" onClick={handleDownload}   >
                                        Download CV
                                    </button>
                                    <ul className="ul-reset social-icons   ">
                                        {socialIcons.map((icon, index) => (
                                            <li key={index}>
                                                <a href={`${icon.href}`}>{icon.icon}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right w-half">
                            <div className="hero-image-box text-center">
                                <img src="/images/common/proimg.png" alt="logo" className=" w-[290px] sm:w-[400px]   " />
                            </div>
                        </div>
                    </div>

                    <div className="funfact-area grid4">
                        {hero.map((item, index) => (
                            <div className="funfact-item" key={index}>
                                <div className="    number">
                                    <span>{item.text}</span>
                                </div>
                                <div className="text">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </section >
        </>
    );
};