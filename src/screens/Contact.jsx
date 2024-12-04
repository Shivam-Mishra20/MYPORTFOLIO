import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        phone: "+ 9129988822",
        email: "shiv912998@gmail.com",
        address: "  Laxmi Nagar, Delhi ",
    });

    useEffect(() => {
        const fetchContactInfo = async () => {
            const dummyData = {
                phone: "+ 9129988822",
                email: "shiv912998@gmail.com",
                address: "  Laxmi Nagar, Delhi ",
            };
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setContactInfo(dummyData); // Replace with actual data
        };

        fetchContactInfo();
    }, []);

    return (
        <>
            <section className="contact-section" id="6">
                <motion.div
                    className="flex justify-around items-center flex-wrap gap-5 containercs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="contact-form-box w-half"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="section-header">
                            <motion.h2
                                className="section-title"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Let’s work together!
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                I design and code beautifully simple things and I love what I do. Just simple like that!
                            </motion.p>
                        </div>

                        <div className="tj-contact-form">
                            <motion.form
                                id="contact-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <div className="flexSB gap">
                                    <motion.div
                                        className="form_group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input type="text" name="conName" id="conName" placeholder="First name" />
                                    </motion.div>
                                    <motion.div
                                        className="form_group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input type="text" name="conLName" id="conLName" placeholder="Last name" />
                                    </motion.div>
                                </div>
                                <div className="flexSB gap">
                                    <motion.div
                                        className="form_group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input type="email" name="conEmail" id="conEmail" placeholder="Email address" />
                                    </motion.div>
                                    <motion.div
                                        className="form_group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" />
                                    </motion.div>
                                </div>
                                <div className="form_group">
                                    <motion.select
                                        name="conService"
                                        id="conService"
                                        className="tj-nice-select"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                    >
                                        <option value="" selected disabled>
                                            Choose Service
                                        </option>
                                        <option value="branding">Branding Design</option>
                                        <option value="web">Web Design</option>
                                        <option value="uxui">UI/UX Design</option>
                                        <option value="app">App Design</option>
                                    </motion.select>
                                </div>
                                <div className="form_group">
                                    <motion.textarea
                                        name="conMessage"
                                        id="conMessage"
                                        placeholder="Message"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.4 }}
                                    ></motion.textarea>
                                </div>
                                <div className="form_btn">
                                    <motion.button
                                        type="submit"
                                        className="btn tj-btn-primary"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                            </motion.form>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[200px] sm:w-[350px] contact-info-list"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <ul className="ul-reset">
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="icon-box">
                                    <IoCallOutline size={25} />
                                </div>
                                <div className="text-box">
                                    <p>Phone</p>
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </div>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="icon-box">
                                    <TfiEmail />
                                </div>
                                <div className="text-box">
                                    <p>Email</p>
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="icon-box">
                                    <CiLocationOn size={25} />
                                </div>
                                <div className="text-box">
                                    <p>Address</p>
                                    <a href="#">{contactInfo.address}</a>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};
