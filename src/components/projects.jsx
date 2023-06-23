import WebProject from "./webProject"
import bitebuddy from '../assets/images/bitebuddy.png'
import kdd from '../assets/images/kdd.png'
import install from '../assets/images/install.png'
import rpsGame from '../assets/images/rps-game.png'
import onlineLibrary from '../assets/images/online-library.png'
import jsMiniPrograms from '../assets/images/js-mini-programs.png'
import './css/projects.css'

const Projects = () => {
    const webProjects = [
        {
            id: 1,
            name: 'BiteBuddy',
            image: bitebuddy,
            desc: 'An online reservation site where users can book/reserve tables on available restaurant with their prefered time and day.',
            stacks: [
                'ReactJS',
                'Node.js',
                'Express.js',
                'MySQL'
            ],
            liveLink: 'https://github.com/cireeijie/capstone-project',
            repository: 'https://github.com/cireeijie/capstone-project'
        },
        {
            id: 2,
            name: 'Korean Delight Davao',
            image: kdd,
            desc: 'An E-commerce site where users can order online with their favorite korean food in order to satisfy their korean food cravings.',
            stacks: [
                'HTML',
                'CSS',
                'JavaScript',
                'Web API'
            ],
            liveLink: 'https://cireeijie.github.io/mini-project-2/',
            repository: 'https://github.com/cireeijie/mini-project-2'
        },
        {
            id: 3,
            name: 'InStall',
            image: install,
            desc: 'This project aims to give opportunity to small businesses to acquire slots on any events with the help of an event organizer. Also, to secure the event to be organized until end of the event.',
            stacks: [
                'HTML',
                'CSS',
                'JavaScript',
                'Bootstrap'
            ],
            liveLink: 'https://cireeijie.github.io/mini-project-1/',
            repository: 'https://github.com/cireeijie/mini-project-1'
        },
        {
            id: 4,
            name: 'Rock, Paper, and Scissors',
            image: rpsGame,
            desc: 'The famous rock, paper, & scissor game created digitally. Players can chose their enemy with the different difficulty.',
            stacks: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            liveLink: 'https://cireeijie.github.io/rock-paper-scissor/',
            repository: 'https://github.com/cireeijie/rock-paper-scissor'
        },
        {
            id: 5,
            name: 'Online Library',
            image: onlineLibrary,
            desc: 'Welcome to our Online Library, the ultimate destination for book lovers and knowledge seekers. With our vast collection of digital books, you can explore a world of literature at your fingertips.',
            stacks: [
                'HTML',
                'CSS',
                'JavaScript',
                'Bootstrap'
            ],
            liveLink: 'https://cireeijie.github.io/bootstrap-online-library/',
            repository: 'https://github.com/cireeijie/bootstrap-online-library'
        },
        {
            id: 6,
            name: 'JavaScript Mini Programs',
            image: jsMiniPrograms,
            desc: "Discover the magic of JavaScript with our collection of interactive and engaging mini programs. Whether you're a beginner looking to learn the basics or an experienced developer seeking to sharpen your skills, our JavaScript Mini Programs are designed to make coding fun and accessible.",
            stacks: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            liveLink: 'https://cireeijie.github.io/js-mini-programs/',
            repository: 'https://github.com/cireeijie/js-mini-programs'
        }
    ]

    return (
        <section id="projects" className="section-row">
            <div className="projects container">
                <h1 className="section-title">Projects</h1>
                <div className="web-development-container">
                    <h1>Web Development</h1>
                    <div className="web-development-projects">
                        {
                            webProjects.map(project => {
                                return <WebProject 
                                    key={project.id}
                                    id = {project.id}
                                    name = {project.name}
                                    image = {project.image}
                                    desc = {project.desc}
                                    stacks = {project.stacks}
                                    liveLink = {project.liveLink}
                                    repository = {project.repository}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="action-btn">
                    <a href="https://drive.google.com/file/d/1PmFzS8VoYpWhd9RfPC6VcVFYs_iZ0IbQ/view?usp=sharing" target="_blank" className="my-designs">
                        <span>View My Designs</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects