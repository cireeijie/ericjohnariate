import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/experiences.css'
import {FaGraduationCap, FaHeadset, FaLaptopCode, FaShopify, FaLinkedin} from 'react-icons/fa'
import {SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftoutlook, SiMicrosoftpowerpoint, SiCisco} from 'react-icons/si'
import {BsClipboardDataFill} from 'react-icons/bs'
import canva from '../assets/icons/canva.svg'
import photoshop from '../assets/icons/photoshop.svg'
import premier from '../assets/icons/premiere.svg'

const Experiences = () => {
    return (
        <section id="experiences" className="section-row">
            <div className="experiences container">
                <h1 className='section-title'>Experiences</h1>
                <VerticalTimeline lineColor='#3C3C3C'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<FaGraduationCap />}
                        date='March 2023 - May 2023'
                    >
                        <div className='achievements'>
                            <p>Top Student</p>
                            <p>Best in Mini Project 1</p>
                        </div>
                        <h1 className='exp-title'>KodeGo</h1>
                        <h5 className='exp-location'>Taguig, Metro Manila, Philippines</h5>
                        <p className='course'>{`Web Development (Full-Stack)`}</p>
                        <div className='skill-experiences'>
                            <i className="fa-brands fa-html5"></i>
                            <i className="fa-brands fa-css3-alt"></i>
                            <i className="fa-brands fa-square-js"></i>
                            <i className="fa-brands fa-react"></i>
                            <i className="fa-brands fa-node-js"></i>
                            <i className="fa-solid fa-database"></i>
                            <i className="fa-brands fa-php"></i>
                            <i className="fa-brands fa-laravel"></i>
                        </div>
                        <div className='exp-action-btns'>
                            <a href='https://kodego.ph/' target='_blank' className='exp-certficate primary-btn'>
                                <span>Visit Website</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                            <a href='#projects' className='exp-projects secondary-btn'>
                                <span>Projects</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                            <a href='https://drive.google.com/file/d/1SOuHxGXvP4BMCpsTB6BEQPBJrk-sQe8V/view?usp=sharing' target='_blank' className='exp-projects secondary-btn'>
                                <span>Certificate</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<FaHeadset />}
                        date='May 2022 - May 2023'
                    >
                        <h1 className='exp-title'>Outsourced Doers</h1>
                        <h5 className='exp-location'>Sydney, Australia</h5>
                        <p className='course'>Virtual Assistant(Doer)</p>
                        <div className='skill-experiences'>
                            <i className="fa-brands fa-html5"></i>
                            <i className="fa-brands fa-css3-alt"></i>
                            <i className="fa-brands fa-square-js"></i>
                            <i className="fa-brands fa-wordpress"></i>
                            <i className="fa-brands fa-wix"></i>
                            <i><img src={canva} /></i>
                            <i><img src={photoshop} /></i>
                            <i><img src={premier} className='premier' /></i>
                        </div>
                        <div className='exp-action-btns'>
                            <a href='https://outsourceddoers.com/' target="_blank" className='exp-certficate primary-btn'>
                                <span>Visit Website</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<FaLaptopCode />}
                        date='November 2019 - February 2022'
                    >
                        <h1 className='exp-title'>Illumedia Outsourcing Inc.</h1>
                        <h5 className='exp-location'>Davao City, Philippines</h5>
                        <p className='course'>Web & Graphic Designer</p>
                        <div className='skill-experiences'>
                            <i className="fa-brands fa-html5"></i>
                            <i className="fa-brands fa-css3-alt"></i>
                            <i className="fa-brands fa-square-js"></i>
                            <i className="fa-brands fa-wordpress"></i>
                            <i className="fa-brands fa-php"></i>
                            <i>{<FaShopify />}</i>
                            <i><img src={canva} /></i>
                            <i><img src={photoshop} /></i>
                            <i><img src={premier} className='premier' /></i>
                        </div>
                        <div className='exp-action-btns'>
                            <a href='https://illumedia.net/' target='_blank' className='exp-certficate primary-btn'>
                                <span>Visit Website</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<FaHeadset />}
                        date='June 2019 - October 2019'
                    >
                        <h1 className='exp-title'>Rank Optimized</h1>
                        <h5 className='exp-location'>Davao City, Philippines</h5>
                        <p className='course'>Virtual Assistant</p>
                        <div className='skill-experiences'>
                            <i><SiMicrosoftword /></i>
                            <i><SiMicrosoftexcel /></i>
                            <i><SiMicrosoftoutlook /></i>
                            <i><SiMicrosoftpowerpoint /></i>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<BsClipboardDataFill />}
                        date='September 2018 - January 2019'
                    >
                        <h1 className='exp-title'>Callbox Inc.</h1>
                        <h5 className='exp-location'>Davao City, Philippines</h5>
                        <p className='course'>Intern | Data Profiling</p>
                        <div className='skill-experiences'>
                            <i><SiMicrosoftword /></i>
                            <i><SiMicrosoftexcel /></i>
                            <i><SiMicrosoftpowerpoint /></i>
                            <i><FaLinkedin /></i>
                        </div>
                        <div className='exp-action-btns'>
                            <a href='https://www.callboxinc.com/' target='_blank' className='exp-certficate primary-btn'>
                                <span>Visit Website</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{background: '#3C3C3C', color: 'white'}}
                        icon={<FaGraduationCap />}
                        date='June 2015 - May 2019'
                    >
                        <div className='achievements'>
                            <p>MultiEdge President (Multimedia Club)</p>
                        </div>
                        <h1 className='exp-title'>AMA Computer College of Davao</h1>
                        <h5 className='exp-location'>Davao City, Philippines</h5>
                        <p className='course'>BS in Information Technology</p>
                        <div className='skill-experiences'>
                        <i className="fa-brands fa-html5"></i>
                            <i className="fa-brands fa-css3-alt"></i>
                            <i className="fa-brands fa-square-js"></i>
                            <i className="fa-brands fa-react"></i>
                            <i className="fa-solid fa-database"></i>
                            <i className="fa-brands fa-php"></i>
                            <i><SiCisco /></i>
                        </div>
                        <div className='exp-action-btns'>
                            <a href='https://www.ama.edu.ph/' target='_blank' className='exp-certficate primary-btn'>
                                <span>Visit Website</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experiences