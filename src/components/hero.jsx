import person from '../assets/images/eric.png'
import './css/hero.css'

const Hero = () => {
    return (
        <section id='hero' className="section-row">
            <div className='job-roles'>
                <p className='developer'>Developer</p>
                <p className='designer'>Designer</p>
            </div>
            <div className="hero container">
                <img 
                    src={person}
                    alt=""
                    data-aos="fade-up" data-aos-duration="1000"
                />
            </div>
        </section>
    )
}

export default Hero