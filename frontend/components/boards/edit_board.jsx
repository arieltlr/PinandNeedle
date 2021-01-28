import React from 'react';
import { openModal } from '../../actions/modal_actions';

class EditBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentStep: 1,
            name: this.props.name,
            description: this.props.description
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        // this.handleStep = this.handleStep.bind(this)

    }
    // componentDidMount(){
    //     this.props.getBoard(this.props.board.id)
    //         .then(this.setState(this.props.board));
    // }
    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const board = Object.assign({}, { id: this.props.board.id, user_id: this.props.currentUser.id, name: this.state.name, description: this.state.name })
        // debugger
        this.props.updateBoard(board)
            .then(this.props.closeModal());
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleDescription(e) {
        this.setState({ description: e.target.value })
    }
    // handleStep(){
    //     this.setState({currentStep: e.target.value})
    // }
    // componentWillUnmount() {
    //     const resetErrors = [];
    //     this.props.refreshErrors(resetErrors);
    // }

    render() {
        
        return (
            <div className="edit-board-form-container">
                <form className="edit-board-form" onSubmit={this.handleSubmit}>
                    <div className="edit-board-title-container">
                        <h1 className="create-title">Edit your board</h1>
                    </div>
                    <p className="edit-board-name-label">Name</p>
                    <input className="create-name" type="text"
                        value={this.state.name} onChange={this.handleName} />
                    <p className="board-description-label">Description</p>
                    <input className="edit-description" type="text"
                        value={this.state.description ? this.state.description : ""}
                        placeholder="What's your board about?"
                        onChange={this.handleDescription} />
                    <div className="edit-button-container">
                        <button className="delete">Delete</button>
                        <button className="red-button-update-board" >Done</button>
                    </div>

                </form>
            </div>
           

        )
    }
}

export default EditBoard;

 // CODE FOR SETTING UP MULTI STEP FORM
            // <React.Fragment>
            //     Step {this.state.currentStep}
            //     <form onSubmit={this.handleSubmit}>
            //         <Step1
            //             currentStep={this.state.currentStep}
            //             handleName={this.handleName}
            //             handleDescription={this.handleDescription}
            //             name={this.state.name}
            //             description={this.state.description}
            //             handleSubmit={this.handleSubmit}

            //         />
            //         <Step2 
            //             currentStep={this.state.currentStep}
            //             closeModal={this.props.closeModal}
            //             deleteBoard={this.props.deleteBoard}
            //         />
            //     </form>
            // </React.Fragment>