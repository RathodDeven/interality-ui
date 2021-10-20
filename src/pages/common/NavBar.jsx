import { Link } from 'react-router-dom';
import Logo from '../../asset/images/logo.png'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import HomeIcon from '../../asset/images/home.png'
import MarketIcon from '../../asset/images/market.png'
import aboutIcon from '../../asset/images/about.png'
import MeIcon from '../../asset/images/me.png'
import CommunityBanner from './CommunityBanner';
import Footer from './Footer';
const NavBar = (props) => {
    const location = useLocation();
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })
    const [navbarVisiblity, setnavBarVisiblity] = useState(!(windowSize.width < 900))
    const onResize = () => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => { return window.removeEventListener('resize', onResize) }
    }, [])
    useEffect(() => {
        document.getElementById('main-container').scrollTo({top:0})
      }, [location]);
    return (
        <>
            <div className="df row" style={{ height: "100vh" }}>


                <header className="df row row-center bg-primary" >
                    {windowSize.width < 900 &&
                        <button onClick={() => { setnavBarVisiblity(!navbarVisiblity) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clipPath="url(#clip0)">
                                    <path d="M6.93408 9.33319H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                                    <path d="M6.93408 16H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                                    <path d="M6.93408 22.6664H24.2674" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect x="5.60059" y="8" width="20" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>}
                    <img src={Logo} alt="Interality logo" />
                </header>

                <div className="nav bg-primary" style={{ transform: navbarVisiblity ? "translateX(0%)" : "translateX(-100%)" }}>
                    <ul className="df row-center">
                        <li>
                            <Link to="/" className={location.pathname === "/" ? "center df active" : "center df"}>
                                <div className="icon">
                                    <img src={HomeIcon} className="fit-content" alt="" />
                                </div>                                
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/market" className={location.pathname === "/market" ? "center df active" : "center df"}>
                                <div className="icon">
                                    <img src={MarketIcon} className="fit-content" alt="" />
                                </div>                                
                                <span>NFTs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === "/about" ? "center df active" : "center df"}>
                                <div className="icon">
                                    <img src={aboutIcon} className="fit-content" alt="" />
                                </div>                                
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/me" className={location.pathname === "/me" ? "center df active" : "center df"}>
                                <div className="icon">
                                    <img src={MeIcon} className="fit-content" alt="" />
                                </div>                                
                                <span>Me</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <main id="main-container" style={{ height: windowSize.height - 70 + "px", width: windowSize.width < 900 ? windowSize.width + "px" : windowSize.width - 100 + "px" }}>
                    {props.children}
                    <CommunityBanner />
                    <Footer />
                </main>
            </div>
        </>
    )
}
export default NavBar;