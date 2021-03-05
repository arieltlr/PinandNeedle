import React from 'react';
import { Link } from 'react-router-dom';

class BoardListDropDown extends React.Component {
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
        debugger
        return (
                <div onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                    {this.state.show ? 
                    <ul>
                        {this.props.options}
                    </ul>
                    : 
                    null}
                    <div className="board-list-dropdown" value={this.props.currentBoard.id}>{this.props.currentBoard.name}</div>
                </div>
        )
    }
}

export default BoardListDropDown;