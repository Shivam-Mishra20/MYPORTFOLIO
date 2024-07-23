import { blogs } from "../../assets/data";
import { CiCalendar } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";

export const Blog = () => {
    return (
        <>
            <section className="blog-section">
                <div className="containercs">
                    <div className="section-header text">
                        <h2 className="section-title">Recent Blogs</h2>
                        <p>These are the recent blogs that I followed...... </p>
                    </div>
                    <div className="grid2">
                        {blogs.map((blog) => (
                            <div className="blog-item" key={blog.id} >
                                <div className="blog-thumb">
                                    <img src={blog.image} alt="" />
                                    <a href="#" className="category">
                                        {blog.category}
                                    </a>

                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <ul className="ul-reset">
                                            <li>
                                                <i>
                                                    <CiCalendar size={20} />
                                                </i>
                                                {blog.date}
                                            </li>
                                            <li>
                                                <i>
                                                    <FaRegComments size={20} />
                                                </i>
                                                Comment ({blog.commentCount})
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title">
                                        <a href='https://github.com/Shivam-Mishra20'>{blog.title}</a>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};