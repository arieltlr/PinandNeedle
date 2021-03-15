import React from 'react';
import { openModal } from '../../actions/modal_actions';

class EditPin extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pin: this.props.pin,
            title: this.props.pin.title,
            pin_url: this.props.pin.pin_url,
            user_id: this.props.pin.user_id,
            description: this.props.pin.description,
            owner_email: this.props.currentUser.email,
            photoUrl: this.props.pin.photoUrl,
            board_name: "",
            board_id: "",
            this_pin_board_id: "",
            show: false,
            board_found: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeWhenClicked = this.closeWhenClicked.bind(this);
        this.whenClicked = this.whenClicked.bind(this);
        this.handleName = this.handleName.bind(this);
        this.findBoard = this.findBoard.bind(this)
        
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
            description: this.state.description,
            id: this.props.pin.id,
            board_id: this.state.board_id
        }
        debugger
        this.props.updatePin(updatedPin).then(() => this.props.closeModal())
        
    }
    handleDelete(e){
        e.preventDefault();
        debugger
        this.props.deletePin(this.state.pin.id).then(()=> this.props.history.push(`/board/${this.state.board_id}`))
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
        debugger
        const pinId = pin.id;
        const pinIdArray = Object.values(user.boards).map(board => {
            return Object.assign({}, {[board.id]: board.pins})
            })
        for (let i = 0; i < pinIdArray.length; i++){
            if (Object.values(pinIdArray[i])[0].includes(pinId)){
                pinsBoard = Object.assign({}, user.boards[parseInt(Object.keys(pinIdArray[i]))]);
            }
        }
        return pinsBoard;
    }

    render (){
        debugger
        let pinsBoard;
        if ( !this.state.board_found ){
            pinsBoard = this.findBoard(this.props.pin, this.props.currentUser);
            this.state.board_id = pinsBoard.id;
            this.state.board_name= pinsBoard.name;
            this.state.board_found = !this.state.board_found;

        }
        const options = Object.values(this.props.currentUser.boards).map((board, index) => {
            return(
                <div id="edit-pin-board-dropdown-li-container"className="boards-dropdown-li-container" value={board.id} data-id={board.name} onClick={this.handleName} key={index}>
                    <div className="boards-dropdown-board">
                        <li className="board-name" value={board.id} data-id={board.name}>
                            {board.name}</li>
                    </div>
                </div>)
        })
        debugger
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
                                            <div id="edit-pin-board-dropdown" className="create-pin-list-save" onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                                                {this.state.show ?
                                                    <ul className="edit-pin-dropdown">
                                                        {options} 
                                                    </ul>                                                    
                                                    : 
                                                    null
                                                }
                                                <div value={this.state.board_id} data-id={this.state.board_name} 
                                                        className="edit-pin-default-board">
                                                    {this.state.board_name}
                                                </div>
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