import {Moon, Sun} from "lucide-react";
import{useEffect, useState} from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); //create a function called darkmode
    //so later we can change the theme

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else{
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [])

    //click on it and swich the theme
    const toggleTheme = () =>{
        if( isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    //after swiching the theme, and refresh the page it'll remember the color theme we've used 
    //use local storage to save the theme
    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-2 right-2 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}
        >
            {""}
            {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" />
            ):(
            <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};