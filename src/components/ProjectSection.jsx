const projects = [
    {
        id: 1,
        title: "Pinterest Clone",
        description: "A clone of the popular Pinterest platform, allowing users to create and share visual content.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://www.pinterest.com/",
        demoUrl:"#",
        githubUrl:"#",
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
            </div>
        </section>
    );
};