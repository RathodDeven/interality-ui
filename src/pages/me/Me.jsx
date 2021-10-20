import './style.css'
import { useState } from 'react';

const Me = () => {
    // const iframeUrl = 'https://demo.readyplayer.me/'
    const [imgUrl, setimgUrl] = useState(null);
    const [isloading, setisloading] = useState(false);

    // Listen to messages from the iframe
    if(imgUrl === null){
        window.addEventListener('message', receiveMessage, false);
    }
    //   Handle messages from the iframe


    async function fetchImageFromAvatarUrl(url){
        const params = 
            {
                model: url,
                scene: "fullbody-portrait-v1",
                armature: "ArmatureTargetMale",
                blendShapes: {}
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            }; 

            await new Promise(r => setTimeout(r, 1000));
            fetch("https://render.readyplayer.me/render",requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data['renders'][0]);
                    setimgUrl(data['renders'][0]);
                    setisloading(false);
                })  
                .catch(error => {
                    console.log('error', error);
                     setisloading(false);
                });
    }
    
      async function receiveMessage(event) {
        // Get URL to avatar
        const url = event.data
        if(typeof url !== 'object' && imgUrl == null){
            setisloading(true);
            console.log(`Avatar URL: ${url}`)
            window.removeEventListener('message', receiveMessage, false);
            await fetchImageFromAvatarUrl(url);
            await new Promise(r => setTimeout(r,1000));
            setisloading(false);
        }

    }


    
    return (
        <>
            <div className="flex-container">
                <div className="me-card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="John" className="profile_img" ></img>
                    <h1>John Doe</h1>
                    <p> johndoe@gmail.com</p>
                    <br />
                    
                    
                    <p className="title">CEO & Founder, Example</p>
                    <br />

                    <a href="#" className="me-a"><i className="fa fa-dribbble"></i> </a>
                    <a href="#" className="me-a"><i className="fa fa-twitter"></i> </a>
                    <a href="#" className="me-a"><i className="fa fa-linkedin"></i> </a>
                    <a href="#" className="me-a"><i className="fa fa-facebook"></i> </a>
                    <br />
                    <p><button className="me-button">Contact</button></p>
                    
                </div>

                <div className="container">
                {isloading && <p>Loading your avatar ....</p>}
                {!imgUrl && (!isloading)  && <iframe id="iframe"
                    title="Inline Frame Example"
                    width="500"
                    height="900"
                    src="https://interality.readyplayer.me/"
                    className="content"
                    allow="camera *; microphone *">
                </iframe>}

                {imgUrl && (!isloading) &&<img src={imgUrl} alt="Avatar" className="profile_img" />}
                
                </div>
            </div>
        </>
    )
    }

export default Me;