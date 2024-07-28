import { useEffect, useRef } from 'react';
import { skillsData } from "../assets/data";
import { motion, useAnimation } from "framer-motion";

export const Skils = () => {
    const controls = useAnimation();
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        controls.start({
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 }
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => {
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, [controls]);

    return (
        <>
            <section className="skills-section" id="4">
                <div className="containercs">
                    <div className="section-header text-center">
                        <h2 className="section-title">My Skills</h2>
                        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                    </div>

                    <motion.div
                        className="skills-widget grid6"
                        ref={skillsRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={controls}
                    >
                        {skillsData.map((skill) => (
                            <motion.div
                                className="skill-item"
                                key={skill.id}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                            >
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src={skill.icon} alt={skill.name} />
                                    </div>
                                    <div className="number">{skill.percentage}%</div>
                                </div>
                                <p>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};
