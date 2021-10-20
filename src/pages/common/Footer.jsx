import React from 'react'
import Logo from '../../asset/images/logo.png'
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="footer-container">
                            <div>
                                <img src={Logo} width="300px" height="100px" alt="logo" className="logo" />
                            </div>
                            <div>
                                <h3>Pages</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/market">Market</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/me">Me</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Support</h3>
                                <ul>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/forum">Forum</Link></li>
                                    <li><Link to="/contact us">Contact Us</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col item social"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-youtube"></i></a><a href="#"><i className="fa fa-instagram"></i></a><a href="#"><i className="fa fa-google"></i></a></div>
                        </div>
                        
                        <p className="copyright">interality.io © 2021</p>
                    </div>
                </footer>
            </div>

            
        </>
    )
}

export default Footer
