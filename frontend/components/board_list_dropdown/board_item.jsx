import React from 'react';
import { Link } from 'react-router-dom';

class BoardItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            show_save_button: false,
            pin: this.props.pin,
        }
        this.onHover = this.onHover.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();

        const assoc = {
                'boardPin[board_id]': this.props.board.id, 
                'boardPin[pin_id]': this.props.pin.id 
            }

        this.props.createAssoc(assoc)
        
    }

    onHover(e){
        e.preventDefault();
        const changeState = !this.state.show_save_button;
        this.setState({show_save_button: changeState});
    }
    render() {
        
        let board = this.props.board;
        let pinID;
        let buttonState;
        if (this.state.show_save_button){
            buttonState = "show-button";
        }else {
            buttonState = "hide-button";
        }
        typeof board.pins[0] === 'object' ? pinID = board.pins[0].id : pinID = board.pins[0]
        return (
                <div className="boards-dropdown-li-container" onMouseEnter={this.onHover} onMouseLeave={this.onHover} key={this.props.index} onClick={this.handleSubmit}>
                    <div className="boards-dropdown-board">
                        { board.pins[0] ? <img  className="dropdown-board-cover" src={this.props.pins[pinID].photoUrl} alt="board-cover-image"/>
                         : <div className="dropdown-board-cover"></div> }
                        <li className="board-name">{board.name}</li>
                    </div>
                    <div className="dropdown-save-button">
                        <div onClick={this.handleSubmit} className={buttonState}>Save</div> 
                    </div>
                </div>
        )
    }
}

export default BoardItem;