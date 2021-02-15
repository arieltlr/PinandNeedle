import React from 'react';
import { withRouter } from 'react-router-dom';


class NewBoardForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        const board = Object.assign({}, {user_id: this.props.currentUser.id, name: this.state.name})
        this.props.createBoard(board)
            .then(this.props.closeModal());
    }
    handleName(e) {
        this.setState({name: e.target.value })
    }
    // componentWillUnmount() {
    //     const resetErrors = [];
    //     this.props.refreshErrors(resetErrors);
    // }

    render(){
        // const errorMessages = this.props.errors;
        // debugger
        return (
            <div className="new-board-form-container">
                <form className="new-board-form" onSubmit={this.handleSubmit}>
                    <h1 className="create-title">Create Board</h1>
                    <p className="board-name-label">Name</p>
                    <input className="create-name" type="text" placeholder="Like 'Quilt inspiration' or 'Pattern references'" onChange={this.handleName}/>
                    {/* {errorMessages.length > 0 ? <p className="error-message" >{errorMessages[0]}</p> : null} */}
                    <button className={ this.state.name.length > 0 ? "red-button-create-board" : "greyed-out-button"} >Create</button>
                </form>
            </div>

        )}
}

export default withRouter(NewBoardForm);