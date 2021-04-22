import React from 'react';
import { Link } from 'react-router-dom';

class BoardDropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            show_dropdown: false,
            show_board_list: "drop-down-container",
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.whenClicked = this.whenClicked.bind(this);


    }

    whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }

    handleSubmit(e){
        e.preventDefault();
        // const assoc = {
        //         'boardPin[board_id]': this.props.firstBoard.id, 
        //         'boardPin[pin_id]': this.props.pin.id 
        //     }

        // this.props.createAssoc(assoc)
        if (!this.props.currentUser.boards){
            const assoc = {
                'boardPin[pin_id]': this.props.pin.id, 
                'boardPin[board_id]': e.target.value,
                'newBoard[user_id]': this.props.currentUser.id,
                'newBoard[owner_email]': this.props.currentUser.email}
            this.props.createAssoc(assoc)
        } else {
                const assoc = {
                    'boardPin[board_id]': e.target.value, 
                    'boardPin[pin_id]': this.props.pin.id 
                }
                this.props.createAssoc(assoc)
        }
    }

    render() {
        return (            
                <div className="pin-overlay-dropdown" key={this.props.index} onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                    {this.props.firstBoard ? 
                                    <div className={this.state.show_board_list}> 
                                        <div id="down-icon-circle-board" className="create-pin-list-save" 
                                            onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                                            {this.props.firstBoard.name}
                                                {this.state.show ? 
                                                <ul className="board-dropdown">
                                                    <li className="board-name" id="save-board-title">Save to board</li>
                                                    {this.props.options}
                                                    <div className="add-board-button-container-feed" onClick={() => this.props.openModal('createBoard')}>
                                                        <div className="add-board-icon"></div>
                                                        <div className="create-new-board">Create Board</div>
                                                    </div>                                                    
                                                </ul>
                                                : 
                                                null}
                                        </div>
                                    { this.props.pinSaved ? null : 
                                        <button value={this.props.firstBoard.id} data-id={this.props.firstBoard.name} 
                                            className="pin-save-button" onClick={this.handleSubmit}>
                                        Save</button>
                                    }
                                    
                                </div> 
                                :
                                <button className="pin-save-button" id="no-board" onClick={this.handleSubmit}>Save</button>
                                }
                </div>
        )
    }
}

export default BoardDropdown;