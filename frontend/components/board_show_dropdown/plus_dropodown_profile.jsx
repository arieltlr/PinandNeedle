import React from 'react';
import { Link } from 'react-router-dom';
import PlusDropdownContent from './plus_dropdown_content';

class BoardPlusDDProfile extends React.Component {
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
                <div onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked} className="">
                    {this.state.show ? 
                    <PlusDropdownContent id="plus-dropdown" user={this.props.user} board={this.props.board} openModal={this.props.openModal} boardShow={this.props.boardShow}/>: 
                    null}
                    <div className="add-item-icon-board-or-pin" alt="plus icon"></div>
                </div>
        )
    }
}

export default BoardPlusDDProfile;