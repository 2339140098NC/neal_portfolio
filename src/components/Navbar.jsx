import {cn} from "@/lib/utils"; //importing the cn function from utils
import {useState, useEffect} from "react"; //importing useState and useEffect from react
import {Menu, X} from "lucide-react"; //importing Menu and X icons from lucide-react

const navItems = [ //a list of different links we're going to have in the navbar
    {name: "Home", href: "#hero"}, //href: what are we linking to
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
    {name: "^_^", href: "#^_^"} //this is a link to the menu of speakeasy links, which is a fun Easter egg
]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); //state to keep track of whether the user has scrolled or not
    const [isMenuOpen, setIsMenuOpen] = useState(true); //state to keep track of whether the mobile menu is open or not

    useEffect(() => {
        const handleScroll = ()=> {
            setIsScrolled(window.scrollY > 10); //if the user has scrolled, set isScrolled to true
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); //cleanup function to remove the event listener when the component unmounts
    },[]);
    return(
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    //href="#hero"
                >
                    <span className="relative z-10">
                        {" "}
                        <span className="text-glow text-foreground"> Neal</span> {" "} Portfolio
                    </span>
                </a>

                {/*desktop version of the navbar*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/*mobile version of the navbar*/}

                <button 
                    onClick={() =>setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ?<X size={24}/> : <Menu size={24}/>}{" "}
                </button>

                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)} //close the menu when a link is clicked
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};