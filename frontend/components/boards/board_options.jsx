import React from 'react';
import { Link } from 'react-router-dom';

const BoardOptions = (props) => {
    if (props.currentUsersBoard){
        return (
            <div className="icon-options-container">
                <div className="ideas-container">
                    <Link to="/feed">
                    <div className="ideas-icon"></div>
                    <p className="icon-text">More ideas</p>
                    </Link>
                </div>
                <div className="notes-container">
                    <div className="notes-icon" onClick={() => props.openModal("edit-board")}></div>
                    <p className="icon-text">Notes</p>
                </div>
            </div>
        )
    } else {
       return ( 
           <div>
               <h1 id="username">{props.emailName}</h1>
           </div>
            
       )

    }
}

export default BoardOptions;