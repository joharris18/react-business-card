import React from 'react'
import ReactDOM from 'react-dom'

export default function Info() {
    return (
        <div className="flex">    
            <img id="info--avatar" src="../images/avatar.png"/>
            
            <div className="info--cont">
                <h3 className="info--name">John Harris</h3>
                <p className="info--job-title">Frontend Developer</p>
                <p className="info--website">joharris.dev</p>
                <div className="info--btn-cont">
                    
                    <a href="#" className="info--email-btn btn">
                    <img src="../images/email.png" />Email</a>
                    
                    <a href="#" className="info--linkedin-btn btn">
                    <img src="../images/linkedin.png" />LinkedIn</a>
                    
                </div>
            </div>
        </div>
    )
}

