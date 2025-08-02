import myImg from '../assets/profile.png'

export default function Info(){
    return(
        <>
            <div className='info'>
                <img className="profile-pic" src={myImg} alt='Profile Image'/>
                <h1>Sarthak Parashar</h1>
                <h3>Frontend Developer</h3>
                <div className="buttons">
                    <a href="mailto:parasharsarthak11@gmail.com" className="email-btn">Email</a>
                    <a href="https://www.linkedin.com/in/sarthak-parashar-07303a247/" className="linkedin-btn">LinkedIn</a>
                </div>
            </div>
        </>
    )
}