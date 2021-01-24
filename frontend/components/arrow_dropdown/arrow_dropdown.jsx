import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContent from './dropdown_content';

class ArrowDropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(e){
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }
    render() {
        return (
            <div onClick={this.whenClicked}>
                {this.state.show ? 
                <DropdownContent id="arrow-dropdown" user={this.props.user} logout={this.props.logout}/>: 
                null}
                <div className="nav-ele" id="down-icon-circle" alt="down-icon"></div>
            </div>

        )
    }
}

export default ArrowDropdown;