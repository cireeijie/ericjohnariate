import {FaChevronRight, FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import logo from '../assets/images/ej-logo.png'
import './css/contact.css'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const submitText = document.querySelector('.submit-text');
        const successText = document.querySelector('.success-text');

        submitText.classList.toggle('invisible');
        successText.classList.toggle('visible');
    }

    return (
        <section id="contact" className="section-row">
            <div className="contact container">
                <div className="column-1">
                    <h1>Work with me!</h1>
                    <form className="contact-form" id="contactForm">
                        <input type="text" id="firstName" className="firstname" placeholder="First Name"/>
                        <input type="text" id="lastName" className="lastname" placeholder="Last Name"/>
                        <input type="email" id="lastName" className="lastname" placeholder="Email"/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message...'></textarea>
                        <button className="submit-btn" id="submitBtn" onClick={handleSubmit}>
                            <span className='submit-text'>
                                <p>Submit</p>
                                <FaChevronRight />
                            </span>
                            <span className='success-text'>
                                <p>Message sent!</p>
                            </span>
                        </button>
                    </form>
                </div>
                <div className="column-2">
                    <div className='contact-info'>
                        <div className='my-info'>
                            <img src={logo} alt="eric logo" />
                            <div className='eric-info'>
                                <p>Eric John Ariate</p>
                                <span>Web Developer | Web & Graphic Designer | Freelancer</span>
                            </div>
                        </div>
                        <div className='info contact-number'>
                            <FaPhoneAlt />
                            <a href="tel:+639205353507">+63 920 5353 507</a>
                        </div>
                        <div className='info contact-number'>
                            <HiMail />
                            <a href="mailto:+639205353507">ericjohnariate@gmail.com</a>
                        </div>
                        <div className='info contact-number'>
                            <IoLocationSharp />
                            <a href='https://goo.gl/maps/G8p63oMrdUMkNLiKA' target='_blank'>Davao City, Philippines 8000</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact