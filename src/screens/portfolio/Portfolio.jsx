import { useState } from 'react';
import { projects } from "../../assets/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    return (
        <>
            <section className="portfolio-section" id="2">
                <div className="containercs">
                    <div className="section-header text-center">
                        <h2 className="section-title">My Recent Works</h2>
                        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                    </div>

                    <div className="portfolio-filter text-center">
                        <div className="button-group filter-button-group">
                            {['All', 'UX/UI', 'GAME APP', 'Apps'].map(category => (
                                <button key={category} onClick={() => setFilter(category)} className={filter === category ? 'active' : ''}>
                                    {category}
                                </button>
                            ))}
                            <div className="active-bg"></div>
                        </div>
                    </div>
                    <div className="portfolio-box relative">
                        <div className="grid2">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    className={`portfolio-item ${project.category.toLowerCase()}`}
                                    key={project.id}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <a href={project.link}>
                                        <div className="image-box">
                                            <img src={project.cover} alt={project.title} />
                                        </div>
                                        <div className="content-box">
                                            <h3 className="portfolio-title">{project.title}</h3>
                                            <p>{project.desc}</p>
                                            <i>
                                                <GoArrowUpRight size={50} />
                                            </i>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
