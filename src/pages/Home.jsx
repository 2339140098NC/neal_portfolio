import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import {Navbar} from "@/components/Navbar";

export default function Home() {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
    {/* Theme toggle*/}
    <ThemeToggle/>
    {/* Background Effects*/}
    <StarBackground/>
    {/* Navbar*/}
    <Navbar/>
    {/* Main content */}

    {/* Footer */}
  </div>;
}