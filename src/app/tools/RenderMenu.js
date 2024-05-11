
import { Home, Projects } from "../components/Pages"

export const Menu = (() => {
    const options = {
        "HOME" : () => <Home/>,
        "PROJECTS" : () => <Projects/>,
        "ABOUT" : () => <p>ABOUT</p>,
        "CONTACT" : () => <p>CONTACT</p>,
    }
    return {
        Render : (option) => {
            return options[option]()
        }
    }
})()