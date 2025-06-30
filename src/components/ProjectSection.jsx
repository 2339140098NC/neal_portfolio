import { ArrowRight, ExternalLink, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Facial Detection",
        description: "This project uses OpenCV to detect faces in a video file and display the results in real time.",
        image: "/projects/project1.png",
        tags: ["Python", "OpenCV"],
        link: "https://github.com/2339140098NC/Facial-detection.git",
        demoUrl:"#",
        githubUrl:"https://github.com/2339140098NC/Facial-detection.git",
    },

    {
        id: 2,
        title: "Spotify Clone",
        description: "A clone of the popular Spotify platform, allowing users to stream and share music.",
        image: "/projects/project2.png",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://www.spotify.com/",
        demoUrl:"#",
        githubUrl:"#",
    },

    {
        id: 3,
        title: "The Verge Clone",
        description: "A clone of The Verge, a technology news and media website.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://www.spotify.com/",
        demoUrl:"#",
        githubUrl:"#",
    },
];
export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "} 
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity. Each project is a testament to my dedication to building high-quality software solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden"> 
                                <img src={project.image}
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120" 
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank" 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-12">
                        <a 
                            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                            href="https://github.com/2339140098NC"
                            target="_blank"
                            >
                            Check My Github <ArrowRight size={16}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};