import { Blog } from "../screens/blog/Blog"
import { Contact } from "../screens/Contact"
import { Hero } from "../screens/hero/Hero"
import { Portfolio } from "../screens/portfolio/Portfolio"
import { Resume } from "../screens/Resume"
import { Services } from "../screens/servicess/Services"
import { Skils } from "../screens/Skils"
import { Testimonial } from "../screens/Testimonial"



const Home = () => {
    return (
        <>
            <div id="0">


                <Hero />
                <Services />
                <Portfolio />
                <Resume />
                <Skils />
                <Testimonial />
                <Blog />
                <Contact />
            </div>
        </>
    )
}

export default Home