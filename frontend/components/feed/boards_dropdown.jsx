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
        // this.onHover = this.onHover.bind(this);


    }
    // onHover(e){
    //     e.preventDefault();
    //     if (!this.props.pinSaved.savedPin){
    //         const changeState = !this.state.show_dropdown;
    //         this.setState({show_dropdown: changeState});
    //     } else {
    //         this.setState({show_dropdown: false})
    //         this.setState({show_board_list: "hidden"})
    //     }
    // }
    whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }

    handleSubmit(e){
        e.preventDefault();

        const assoc = {
                'boardPin[board_id]': this.props.firstBoard.id, 
                'boardPin[pin_id]': this.props.pin.id 
            }

        this.props.createAssoc(assoc)
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
                                                    <div className="add-board-button-container">
                                                        <div className="add-board-icon" onClick={() => this.props.openModal('createBoard')}></div>
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