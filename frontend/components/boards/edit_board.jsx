import React from 'react';

class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);

    }
    // componentDidMount(){
    //     this.props.getBoard(this.props.board.id)
    //         .then(this.setState(this.props.board));
    // }
    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const board = Object.assign({}, { id: this.props.board.id, user_id: this.props.currentUser.id, name: this.state.name, description: this.state.name })
        debugger
        this.props.updateBoard(board)
            .then(this.props.closeModal());
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleDescription(e) {
        this.setState({ description: e.target.value })
    }
    // componentWillUnmount() {
    //     const resetErrors = [];
    //     this.props.refreshErrors(resetErrors);
    // }

    render() {
        // const errorMessages = this.props.errors;
        // debugger
        return (
            <div className="new-board-form-container">
                <form className="new-board-form" onSubmit={this.handleSubmit}>
                    <h1 className="create-title">Edit your board</h1>
                    <p className="board-name-label">Name</p>
                    <input className="create-name" type="text" 
                        value={this.state.name} onChange={this.handleName} />
                    <p className="board-description-label">Description</p>
                    <input className="create-name" type="text" 
                        value={this.state.description} 
                        placeholder="What's your board about?'" 
                        onChange={this.handleDescription} />
                    <div className="edit-button-container">
                        <button className="red-button-create-board" >Done</button>
                        <button>Delete</button>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default EditBoard;