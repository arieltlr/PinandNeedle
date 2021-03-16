import React from 'react';
import { Link } from 'react-router-dom';
import PlusDropdownContent from './plus_dropdown_content';

class BoardPlusDD extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }
    render() {
        return (
                <div onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                    {this.state.show ? 
                    <PlusDropdownContent id="plus-dropdown" user={this.props.user} board={this.props.board} openModal={this.props.openModal} boardShow={this.props.boardShow}/>: 
                    null}
                    <div className="add-item-icon-board-or-pin" id="board-create-dropdown" alt="plus icon"></div>
                </div>
        )
    }
}

export default BoardPlusDD;