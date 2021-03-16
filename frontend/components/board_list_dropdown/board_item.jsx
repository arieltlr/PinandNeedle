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
        debugger
        this.onHover = this.onHover.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        const assoc = Object.assign({}, {pin_id: this.state.pin.id}, {board_id: e.target.value})
        this.props.createAssoc(assoc)
        
    }

    onHover(e){
        e.preventDefault();
        const changeState = !this.state.show_save_button;
        this.setState({show_save_button: changeState});
    }
    render() {
        debugger
        let board = this.props.board;
        let pins = this.props.pins;
        let index = this.props.index
        let buttonState;
        debugger
        if (this.state.show_save_button){
            buttonState = "show-button";
        }else {
            buttonState = "hide-button";
        } 
        return (
                <div className="boards-dropdown-li-container" onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
                    <div className="boards-dropdown-board">
                        { board.pins[0] ? <img  className="dropdown-board-cover" src={pins[board.pins[0]].photoUrl} alt="board-cover-image"/>
                         : <div className="dropdown-board-cover"></div> }
                        <li className="board-name" key={index} value={board.id} data-id={board.name} 
                        onClick={this.handleSubmit}>{board.name}</li>
                    </div>
                    <div >
                        <button className={buttonState}>Save</button> 
                    </div>
                </div>
        )
    }
}

export default BoardItem;