import { useEffect, useState } from "react"

//we want to keep track of the id, size, x, y, opaicty, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
                generateStars();
            };

            window.addEventListener('resize', handleResize); //when we resize the window, it will generate stars again
            return () => {
                window.removeEventListener('resize', handleResize); //cleanup function to remove the event listener
            };

    }, []); //empty array means it will only run once when the component mounts
    const generateStars =() =>{ //when we click on the button, it will generate stars
        const numOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000); //number of stars based on the screen size
        const newStars = [];
        for(let i = 0; i < numOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, //opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, //animation duration between 5 and 10 seconds

            });
        }
        setStars(newStars);
    }

    const generateMeteors =() =>{ //when we click on the button, it will generate stars
        const numOfMeteors = 4
        const newMeteors = [];
        for(let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                opacity: Math.random() * 0.5 + 0.5, //opacity between 0.5 and 1
                animationDuration: Math.random() * 3 + 3, //animation duration between 5 and 10 seconds
            });
        }
        setMeteors(newMeteors);
    }


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
            {stars.map((star)=>(
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                />
            ))}


            {meteors.map((meteor)=>(
                <div 
                    key={meteor.id} 
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 20 + 'px',
                        height: meteor.size + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                    }}
                />
            ))}
        </div>
    );
};