import React from 'react';
import { Link, useHistory } from "react-router-dom"

const Logo = () => {
        const history = useHistory()
        const handleLink = () =>{
            history.push("/")
        }
 
    return (
        <div className="content">
            <div className="cat">
            <div className="ears">
                <span></span>
                <span></span>
            </div>
            <div className="eyes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nose">
                <span></span>
                <span></span>
            </div>
            <div className="mouth">3</div>
            <div className="paws">
                <span></span>
                <span></span>
            </div>
            <div className="tail"></div>
            </div>
            <div className="wall" style={{color:"white" , textAlign:"center"}}>
                <strong style={{fontSize:"250%"}}>Sweet Home</strong>
                <div style={{fontSize:"110%" }}>Logiciel de gestion du quotidien	des usagers du secteur social et médico social.
                    <div style={{display:"flex"}}>
                        <div style={{flex: 6}}>
                            <Link to="/signup" onClick={handleLink}>Essai gratuit</Link>
                        </div>
                        <div style={{flex: 6}}>
                            <Link to="/login" >Se connecter</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Logo;