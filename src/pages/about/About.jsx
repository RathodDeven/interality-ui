import {sponsors, team, cards} from "./data"
import './about.css'
import image from '../../asset/images/logo.png'





const About = () => {
    return (
        <>
            <div className="header">
            <h1>Interality</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="card">
                <h1>Learn about our Products</h1>
                <div className="cardUrl">
                    {cards.map((detail)=>(
                            <div className="image" key = {detail.title}>
                                <img src={detail.image} className="imgur" alt=""/>
                                <div className="overlay">
                                    <h2 className="imagetitle">{detail.title}</h2>
                                    <p className="description">{detail.description}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
            <div className="card">
                <h1>Learn about our Products</h1>
                <div className="cardUrl">
                    {cards.map((detail)=>(
                            <div className="image" key = {detail.title}>
                                <img src={detail.image} className="imgur" alt=""/>
                                <div className="overlay">
                                    <h2 className="imagetitle">{detail.title}</h2>
                                    <p className="description">{detail.description}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
            <div className="partners">
                <h1>Partners</h1>
                <div className="partnerUrl">
                    {sponsors.map((sponsor)=>(
                            <a key={sponsor.name} className="partner" href={sponsor.link}>
                                <img src={image} alt={sponsor.name} className="sponsorimg"/>     
                            </a>
                    ))}
                </div>
            </div>
           <div className = "team">
               <h1>Meet the Team</h1>
               <div className="teamUrl">
                    {team.map((human)=>(
                            <a key={human.name} className="partner" href={human.link}>
                                <img src={image} alt={human.name} className="teamimg" />     
                            </a>
                    ))}
                </div>

           

           </div>
        </>
    )
}
export default About;