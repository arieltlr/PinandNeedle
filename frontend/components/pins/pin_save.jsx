import React from 'react';
import {Link } from 'react-router-dom';


class PinSave extends React.Component {
    render (){
        debugger
        return (
            <div>
                <h1>Saved to {this.props.board.name}</h1>
                <img id="pin-preview" src={Object.values(this.props.pins)[0].photoUrl} />
                
                <button onClick={()=>this.props.closeModal()}>
                    <Link to={`/pin/${Object.values(this.props.pins)[0].id}`}>See it now</Link>
                </button>
                
            </div>
            

        )
    }
}

export default PinSave;