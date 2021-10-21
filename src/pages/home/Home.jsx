// import { Link } from 'react-router-dom';
import bgImage from '../../asset/images/homebg.jpeg'
import CommunityBanner from '../common/CommunityBanner';
import Footer from '../common/Footer';
const Home = () => {
    return (
        <>
        <div className="row fit-content df home-page-container" style={{position:'relative'}}>  
        <img src={bgImage} className="fit-content df" style={{objectFit:"cover"}} alt="" />          
            {/* <video className="fit-content df"  src={Video} autoplay="autoplay"  style={{objectFit:"cover"}} loop="loop" preload="auto" muted="muted"></video>             */}
            <div className="home-page-box">
                <h1 className="txt-large">Welcome to PortCity</h1>
                <h3 className="txt-medium">Join with other users in a Virtual city, Create your own virtual city.</h3>
                <a href="https://metasp.link/scenes/dan5Y5j" className="btn center">
                    Enter the PortCity
                </a>
            </div>
        </div>
        
</>

    )
}
export default Home;