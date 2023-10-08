import Hero from "./Hero"
import NavBar from "./NavBar"

const MainSection = () => {
    return (
        <div className="bg-[url('/Background.png')]">
            <NavBar/>
            <Hero/>
        </div>
    )
}

export default MainSection