import { useEffect } from 'react'
import formalPic from '../assets/images/eric-formal.png'
import './css/about.css'
import SkillProgressBar from './skillProgressBar'

const skills = [
    {
        id: 1,
        name: 'HTML',
        progress: 100,
        icon:'fa-brands fa-html5'
    },
    {
        id: 2,
        name: 'CSS',
        progress: 100,
        icon: 'fa-brands fa-css3-alt'
    },
    {
        id: 3,
        name: 'JavaScript',
        progress: 100,
        icon: 'fa-brands fa-square-js'
    },
    {
        id: 4,
        name: 'React JS',
        progress: 90,
        icon: 'fa-brands fa-react'
    },
    {
        id: 5,
        name: 'Node.js',
        progress: 90,
        icon: 'fa-brands fa-node-js'
    },
    {
        id: 6,
        name: 'MySQL',
        progress: 90,
        icon: 'fa-solid fa-database'
    }
]

const About = () => {
    useEffect(()=> {
        const skillBar = document.querySelectorAll(".circular-progress");
        skillBar.forEach(async (skill) => {
            let start = 0;
            const end = parseInt(skill.id);

            const progressBar = await setInterval(() => {
                start++;
                skill.style.background = `conic-gradient(#3C3C3C ${start * 3.6}deg, #ffffff 0deg)`;
                
                if(start == end) {
                    clearInterval(progressBar);
                }
            }, 40)
        })
    }, [])
    
    return (
        <section id='about' className="section-row">
            <div className="about container">
                <div className="column-1">
                    <h1 className='name'>Eric John Ariate</h1>
                    <span className='sub'>Full Stack Web Developer | Web & Graphic Designer | Freelancer</span>
                    <p className='desc'>
                        Hello! I'm Eric, a dedicated and passionate Junior Web Developer with expertise in web design, graphic design, and virtual assistance. With a keen eye for detail and a strong technical background, I am committed to creating visually stunning and highly functional websites that leave a lasting impression.
                    </p>
                    <div className='action-btns'>
                        <a href='https://drive.google.com/file/d/1SOuHxGXvP4BMCpsTB6BEQPBJrk-sQe8V/view?usp=sharing' target='_blank' className='resume' data-aos="fade-right" data-aos-duration="500">
                            <span>Download Resume</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a href='#Projects' className='to-projects'>
                            <span>My Projects</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="column-2">
                    <img src={formalPic} />
                </div>
            </div>
            <div className="skills container">
                <div className='skills-heading'>
                    <h1 className='title'>Tech Savvy</h1>
                    <span className='sub'>Highlighting In-Demand Technical Skills</span>
                </div>
                
                <div className='my-skills' data-aos="fade-up" data-aos-duration="1000">
                    {
                        skills.map(skill => {
                            return  <SkillProgressBar 
                                        key={skill.id}
                                        name = {skill.name}
                                        progress = {skill.progress}
                                        icon = {skill.icon}
                                    />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default About