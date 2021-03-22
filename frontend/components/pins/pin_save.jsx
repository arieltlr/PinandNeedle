import React from 'react';
import { Link } from 'react-router-dom';


class PinSave extends React.Component {
    render (){
        const pin = Object.values(this.props.pins).reverse()[0]
        return (
            <div className="pin-save-container">
                <h1>Saved to {this.props.board.name}</h1>
                <div className="image-container">
                    <img src={pin.photoUrl} />
                </div>
                
                <div className="pin-save-button-container">
                    <button onClick={()=>this.props.closeModal()}>
                        <Link to={`/pin/${pin.id}`}>See it now</Link>
                    </button>
                </div>
                
                
            </div>
            

        )
    }
}

export default PinSave;