import './css/webProject.css'

const WebProject = ({id, name, image, desc, stacks, liveLink, repository}) => {
    return (
        <div className="web-project-card" id={name} data-aos="fade-up" data-aos-duration="500">
            <div className="image-container">
                <img src={image} alt='bitebuddy'/>
            </div>
            <div className="project-description">
                <h1 className="project-title">{name}</h1>
                <p className="description">{desc}</p>
                <div className="stacks">
                    {
                        stacks.map(stack => {
                            return <span key={`${stack}${id}`}>{stack}</span>
                        })
                    }
                </div>
                <div className="action-btns">
                    <a href={liveLink} target='_blank' className="live-link primary-btn">
                        <span>Live Demo</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                    <a href={repository} target='_blank' className="repo-link secondary-btn">
                        <span>Repository</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WebProject