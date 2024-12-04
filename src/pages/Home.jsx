
import { Contact } from "../screens/Contact"
import { Hero } from "../screens/hero/Hero"
import { Portfolio } from "../screens/portfolio/Portfolio"
import { Resume } from "../screens/Resume"
import { Services } from "../screens/servicess/Services"
import { Skils } from "../screens/Skils"




const Home = () => {
    return (
        <>
            <div id="0">


                <Hero />
                <Services />
                <Portfolio />
                <Resume />
                <Skils />


                <Contact />
            </div>
        </>
    )
}

export default Home