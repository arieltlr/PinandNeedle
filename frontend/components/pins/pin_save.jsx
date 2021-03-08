import React from 'react';
import { Link } from 'react-router-dom';


class PinSave extends React.Component {
    render (){
        debugger
        const pin = Object.values(this.props.pins).reverse()[0]
        return (
            <div>
                <h1>Saved to {this.props.board.name}</h1>
                <img id="pin-preview" src={pin.photoUrl} />
                
                <button onClick={()=>this.props.closeModal()}>
                    <Link to={`/pin/${pin.id}`}>See it now</Link>
                </button>
                
            </div>
            

        )
    }
}

export default PinSave;