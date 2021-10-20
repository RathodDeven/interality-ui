import React from 'react'
import './communityBanner.css'

const CommunityBanner = () => {
    return (
        <div className="img_container">
            <img src="https://ik.imagekit.io/ikmedia/accessories_banner.jpg?tr=w-1200,h-400" height="300px" alt="Snow" className="profile_img" />
            
            <div className="center-right">
                <h1 style={{"color":"black","fontSize":"30px", marginBottom : "10px"}}>Join Our Community</h1>
                <p style={{"color":"black","fontSize":"15px", marginBottom: "5px"}}>Be part of our amazing community and stay
    tuned for the news.</p>
                <button className="join-btn"style={{"fontSize":"20px"}} onClick={ () => {
                    window.location.href = 'https://www.interality.io/'
                }} >Join Us</button>
            </div>
            </div>
    )
}

export default CommunityBanner
