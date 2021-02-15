import React from 'react';
import {withRouter} from 'react-router-dom';

class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.board.name,
            description: this.props.board.description,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const board = Object.assign({}, { id: this.props.board.id, user_id: this.props.currentUser.id, name: this.state.name, description: this.state.description })
        this.props.updateBoard(board)
            .then(this.props.closeModal());
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleDescription(e) {
        this.setState({ description: e.target.value })
    }
    handleDelete(e){
        this.props.deleteBoard(this.props.board.id)
            .then(() => this.props.history.push(`/user/${this.props.board.user_id}`)) 
    }

    render() {
        return (
            <div className="edit-board-form-container">
                <form className="edit-board-form" onSubmit={this.handleSubmit}>
                    <div className="edit-board-title-container">
                        <h1 className="create-title">Edit your board</h1>
                    </div>
                    <p className="edit-board-name-label">Name</p>
                    <input className="create-name" type="text"
                        defaultValue = {this.state.name}
                        placeholder={this.state.name} 
                        onChange={this.handleName} />
                    <p className="board-description-label">Description</p>
                    <input className="edit-description" type="text"
                        defaultValue = {this.state.description}
                        placeholder="What's your board about?"
                        onChange={this.handleDescription} />
                    <div className="edit-button-container">
                        <button onClick={this.handleDelete} className="delete">Delete</button>
                        <button className="red-button-update-board">Done</button>
                    </div>

                </form>
            </div>
           

        )
    }
}

export default withRouter(EditBoard);