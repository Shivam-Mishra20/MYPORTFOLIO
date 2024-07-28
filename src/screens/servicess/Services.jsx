import { useEffect, useRef } from 'react';
import { service } from "../../assets/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Services = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                type: 'spring',
                stiffness: 50,
                damping: 20,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
            },
        },
    };

    return (
        <>
            <section className="services-section" id="1">
                <div className="containercs">
                    <div className="section-header text-center">
                        <h2 className="section-title">My Quality Services</h2>
                        <p>
                            We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                        </p>
                    </div>

                    <motion.div
                        className="services-widget position-relative"
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={containerVariants}
                    >
                        {service.map((item) => (
                            <motion.div className="service-item flexSB" key={item.id} variants={itemVariants}>
                                <div className="left-box">
                                    <span className="number">0{item.id}</span>
                                    <h3 className="service-title">{item.title}</h3>
                                </div>
                                <div className="hidden md:flex right-box">
                                    <p>{item.text}</p>
                                </div>
                                <i>
                                    <GoArrowUpRight size={40} />
                                </i>
                                <button className="service-link modal-popup"></button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};
