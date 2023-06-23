import './css/skillProgressBar.css'

const SkillProgressBar = ({name, progress, icon}) => {
    return (
        <div className="progressbar-container">
            <div className="circular-progress" id={progress}>
                <div className='contents'>
                    <i className={icon}></i>
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}

export default SkillProgressBar