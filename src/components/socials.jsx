import {FaFacebookF, FaInstagram, FaYoutube, FaGithub, FaAngleDown, FaLinkedinIn} from 'react-icons/fa'
import './css/socials.css'
import { useEffect, useState } from 'react';

const Socials = () => {
    const [ showSocials, setShowSocials ] = useState(true);

    useEffect(() => {
        const parent = document.querySelector('#socials');
        const toggleBtn = document.querySelector('.toggle-icon');

        window.addEventListener('scroll', () => {
            parent.classList.toggle('hide-social', window.scrollY > 0);
            toggleBtn.classList.toggle('open-social', window.scrollY > 0);
            if(window.scrollY) {
                setShowSocials(false);
            }
            
            if(!window.scrollY) {
                setShowSocials(true);
            }
        })
    }, [showSocials])
    
    const toggleSocial = () => {
        const parent = document.querySelector('#socials');
        const toggleBtn = document.querySelector('.toggle-icon');
        const current = showSocials;

        if(current) {
            parent.classList.add('hide-social');
            toggleBtn.classList.add('open-social');
            setShowSocials(false)
        }
        else {
            parent.classList.remove('hide-social');
            toggleBtn.classList.remove('open-social');
            setShowSocials(true)
        }
    }

    return (
        <div id="socials" className="section-row">
            <div className="socials container">
                <div className='social-icons-container'>
                    <div className="v-line"></div>
                    <div className="social-icons">
                        <a
                            href='https://www.facebook.com/cire.eijie'
                            target='_blank'
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href='https://www.instagram.com/eijiecire/'
                            target='_blank'
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UCwzWxvqIKFxuUk3XmihmC7A'
                            target='_blank'
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/eric-john-ariate-278a02243/'
                            target='_blank'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href='https://github.com/cireeijie'
                            target='_blank'
                        >
                            <FaGithub />
                        </a>

                        <div className='toggle-social' onClick={toggleSocial}>
                            <FaAngleDown className='toggle-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials