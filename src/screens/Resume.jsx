import { useEffect, useRef } from 'react';
import { educationData, experienceData } from "../assets/data";
import { CiMedal } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";

export const Resume = () => {
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const experienceControls = useAnimation();
    const educationControls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === experienceRef.current) {
                            experienceControls.start({
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 }
                            });
                        } else if (entry.target === educationRef.current) {
                            educationControls.start({
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 }
                            });
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (experienceRef.current) observer.observe(experienceRef.current);
        if (educationRef.current) observer.observe(educationRef.current);

        return () => {
            if (experienceRef.current) observer.unobserve(experienceRef.current);
            if (educationRef.current) observer.unobserve(educationRef.current);
        };
    }, [experienceControls, educationControls]);

    return (
        <>
            <section className="resume-section" id="3">
                <div className="containercs flexSB">
                    <motion.div
                        className="w-half"
                        ref={experienceRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={experienceControls}
                    >
                        <div className="section-header">
                            <h2 className="section-title">
                                <PiGraduationCap size={50} /> My Experience
                            </h2>
                        </div>

                        <div className="resume-widget">
                            {experienceData.map((item) => (
                                <div className="resume-item" key={item.id}>
                                    <div className="time">{item.time}</div>
                                    <h3 className="resume-title">{item.title}</h3>
                                    <div className="institute">{item.institute}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-half"
                        ref={educationRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={educationControls}
                    >
                        <div className="section-header">
                            <h2 className="section-title flexE">
                                <CiMedal size={50} /> My Education
                            </h2>
                        </div>

                        <div className="resume-widget">
                            {educationData.map((item) => (
                                <div className="resume-item" key={item.id}>
                                    <div className="time">{item.time}</div>
                                    <h3 className="resume-title">{item.title}</h3>
                                    <div className="institute">{item.institute}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
