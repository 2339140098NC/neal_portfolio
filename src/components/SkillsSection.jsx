import React, { act, useState } from 'react';
import { cn } from "@/lib/utils";

const skills = [
    {name: "HTML/CSS", level:65, category:"frontend"},
    {name: "JavaScript", level: 70, category: "frontend"},
    {name: "React", level: 60, category: "frontend"},
    {name: "Tailwind CSS", level: 55, category: "frontend"},


//backend skills
    {name: "Node.js", level: 50, category: "backend"},
    {name: "MongoDB", level: 45, category: "backend"},

//Tools
    {name: "Git", level: 60, category: "tools"},
    {name: "Docker", level: 40, category: "tools"},
    {name: "Figma", level: 50, category: "tools"},
    {name: "VS Code", level: 70, category: "tools"},

//programming languages
    {name: "Python", level: 75, category: "languages"},
    {name: "Java", level: 50, category: "languages"},
    {name: "C++", level: 45, category: "languages"},
    {name: "TypeScript", level: 60, category: "languages"},
    {name: "C", level: 65, category: "languages"},

]

const categories = ["all", "frontend", "backend", "tools", "languages"];




export const SkillsSection = () => {
    const [activeCategory, setActiveCategory]= useState("all");
    const filteredSkills = skills.filter(skill =>activeCategory === "all" || skill.category === activeCategory);
    /*it's gonna loop through the array, go through each item and choose which item we want to keep on
    this new filtered skills array or not*/ 
    return<section id="skills" className="py-24 px-4 bg-secondary-30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button 
                        key={key} 
                        onClick={()=> setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-foreground hover:bg-secondary-100"
                        
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key) => (
                    <div key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover" 
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skills.name} 
                            </h3>
                        </div>
                        <div className="w-full bg-secondary-50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skills.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skills.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}