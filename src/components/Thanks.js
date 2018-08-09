import React from 'react';
import mail from "../images/marketing.svg"


function Thank(props){
    return (
        <div>
            <div className="empty">
                <div className="empty-icon">
                    <img src={mail}  alt="" width="80"/>
                </div>
                <p className="empty-title h5">Thanks for registering. You will receive an email immediately the GNPC scholarship is available</p>
                <p className="empty-subtitle">Click the button below to register.</p>
                <div className="empty-action">
                    <button className="btn btn-primary" onClick={props.register}>Register</button>
                </div>
            </div>
            </div>
        </div>

    );

}

export default Thank;
