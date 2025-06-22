export const AboutMeSection =() => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                   About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            A passionate software developer
                        </h3>

                        <p className="text-muted-foreground">
                            {" "}
                            I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to build applications that make a difference in people's lives.
                        </p>
                        
                        <p className="text-muted-foreground">
                            I have a strong foundation in computer science principles and a keen interest in web development. I enjoy working on projects that challenge me and allow me to grow as a developer. I am also an advocate for clean code and best practices in software development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors-duration-300">
                                Download Resume
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};