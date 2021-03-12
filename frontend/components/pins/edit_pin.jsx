import React from 'react';
import { openModal } from '../../actions/modal_actions';

class EditPin extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pin: Object.values(this.props.pin)[0],
            title: Object.values(this.props.pin)[0].title,
            pin_url: Object.values(this.props.pin)[0].pin_url,
            user_id: Object.values(this.props.pin)[0].user_id,
            description: Object.values(this.props.pin)[0].description,
            owner_email: this.props.currentUser.email,
            photoUrl: Object.values(this.props.pin)[0].photoUrl,
            board_name: "",
            board_id: "",
            show: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeWhenClicked = this.closeWhenClicked.bind(this);
        this.whenClicked = this.whenClicked.bind(this);
        this.handleName = this.handleName.bind(this);
        this.findBoard = this.findBoard.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        debugger
        this.setState({
            [name]: value
        })
    }
    handleName(e){
        this.setState({
            board_name: e.target.dataset.id, board_id: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
    
        const updatedPin = {
            title: this.state.title,
            pin_url: this.state.pin_url,
            user_id: this.props.currentUser.id,
            description: this.state.description,
            owner_email: this.props.currentUser.email,
            id: Object.values(this.props.pin)[0].id
        }
        this.props.updatePin(updatedPin).then(() => this.props.closeModal())
    }
    handleDelete(e){
        e.preventDefault();
        this.props.deletePin(this.props.pin.id).then(() => this.props.closeModal())
    }
    whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }
     closeWhenClicked(e){
        e.preventDefault()
        if (this.state.show){
            const changeState = !this.state.show;
            this.setState({show: changeState});
        }   
    }
    findBoard(pin, user){
        let pinsBoard;
        const pinId = parseInt(Object.keys(pin)[0]);
        const pinIdArray = Object.values(user.boards).map(board => {
            debugger
            return Object.assign({}, {[board.id]: board.pins})
            })
        for (let i = 0; i < pinIdArray.length; i++){
            debugger
            if (Object.values(pinIdArray[i])[0].includes(pinId)){
                pinsBoard = Object.assign({}, user.boards[parseInt(Object.keys(pinIdArray[i]))]);
            }
        }
        debugger
        return pinsBoard;
    }

    render (){
        
        debugger
        const pinsBoard = this.findBoard(this.props.pin, this.props.currentUser)
        debugger
        const options = Object.values(this.props.currentUser.boards).map((board, index) => {
            return(
                <div id="edit-pin-board-dropdown-li-container"className="boards-dropdown-li-container" value={board.id} data-id={board.name} onClick={this.handleName} key={index}>
                    <div className="boards-dropdown-board">
                        <li className="board-name" value={board.id} data-id={board.name}>
                            {board.name}</li>
                    </div>
                </div>)
        })
        return (
            <div className="edit-pin-form-container">
                <form className="edit-pin-form" onSubmit={this.handleSubmit}>
                        <div className="edit-pin-header">
                            <h1>Edit this Pin</h1>
                        </div>
                        <div className="edit-pin-middle-container">
                                <div className="pin-input-fields">
                                    <div className="edit-field-input-container">
                                        <p>Board</p> 
                                        <div className="drop-down-container" id="edit-pin-dropdown-container">                                       
                                            <div id="edit-pin-board-dropdown" className="create-pin-list-save" onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>{this.state.board_name}
                                                {this.state.show ?
                                                    <ul className="edit-pin-dropdown">
                                                        {options} 
                                                    </ul>                                                    
                                                    : 
                                                    null
                                                }
                                                <div value={pinsBoard.id} data-id={pinsBoard.name} 
                                                        className="edit-pin-default-board">
                                                    {pinsBoard.name}</div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="edit-field-input-container">
                                        <p>Title</p>
                                        <input type="text" defaultValue={this.state.title} placeholder="Give your pin a title"
                                        className="pin-input" type="text" name="title" onChange={this.handleChange}/>
                                    </div>
                                    <div className="edit-field-input-container">
                                        <p>Description</p>
                                        <input type="text" defaultValue={this.state.description} placeholder="Tell us about this pin"
                                        className="pin-input" type="text" name="description" onChange={this.handleChange}/>
                                    </div>
                                    <div className="edit-field-input-container">
                                        <p>Website</p>
                                        <input type="text" defaultValue={this.state.pin_url} 
                                        className="pin-input" type="text" name="pin_url" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="pin-image-container">   
                                    <img src={this.state.photoUrl} alt="pin-image"/>
                                </div>
                        </div>
                        <div className="edit-pin-button-container">
                            <button onClick={this.handleDelete}>Delete</button>
                            <div className="second-edit-pin-button-container">
                                <button onClick={() => this.props.closeModal()}>Cancel</button>
                                <button id="pin-edit-save-button">Save</button>
                            </div>
                        </div>
                </form>
            </div>
        )

    }
}

export default EditPin;