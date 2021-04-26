import React from 'react';
import { openModal } from '../../actions/modal_actions';

class EditPinsBoard extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pin: this.props.pin,
            board_name: "",
            board_id: "",
            new_board_id: "",
            this_pin_board_id: "",
            show: false,
            board_found: false,
            delete_boardsPin: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.closeWhenClicked = this.closeWhenClicked.bind(this);
        this.whenClicked = this.whenClicked.bind(this);
        this.handleName = this.handleName.bind(this);
        this.findBoard = this.findBoard.bind(this);
        this.findBoardFromObj = this.findBoardFromObj.bind(this);
        
    }

    handleName(e){
        this.setState({
            board_name: e.target.dataset.id, new_board_id: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let updatedPin;
        if (this.state.new_board_id) {
            updatedPin = {
            id: this.props.pin.id,
            board_id: this.state.board_id,
            new_board_id: this.state.new_board_id,
            }
            this.props.updatePin(updatedPin).then(() => this.props.closeModal())
            } 
        else{
            this.props.closeModal()
            }
            
    }
        
    handleDelete(e){
        e.preventDefault();
        const deletePin = {
            pinId: this.state.pin.id,
            board_id: this.state.board_id,
            delete_boardsPin: true,
            userId: this.props.currentUser.id,
        }
        this.props.removeBoardsPin(deletePin).then(()=> this.props.history.push(`/board/${this.state.board_id}`))
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
    findBoardFromObj(pin, user){
        let pinsBoard;
        const pinId = pin.id;
        const pinIdArray = Object.values(user.boards).map(board => {
            return Object.assign({}, {[board.id]: board.pins})
            })
        
        for (let i = 0; i < pinIdArray.length; i++){
            for (let j = 0; j < Object.values(pinIdArray[i])[0].length; j++){
                if (Object.values(pinIdArray[i])[0][j].id === pinId){
                    pinsBoard = Object.assign({}, user.boards[parseInt(Object.keys(pinIdArray[i]))]);
                    return Object.assign({}, user.boards[parseInt(Object.keys(pinIdArray[i]))]);
                }
            }
        }
        
        return pinsBoard;
    }
    
    render (){
        let pinsBoard;
        if ( !this.state.board_found ){
            if (typeof Object.values(this.props.boards)[0].pins[0] === "object"){
                this.state.board_found = !this.state.board_found;
                pinsBoard = this.findBoardFromObj(this.props.pin, this.props.currentUser);
                this.state.board_id = pinsBoard.id;
                this.state.board_name= pinsBoard.name;
                
            } else{
                
                pinsBoard = this.findBoard(this.props.pin, this.props.currentUser);
                this.state.board_id = pinsBoard.id;
                this.state.board_name= pinsBoard.name;
                this.state.board_found = !this.state.board_found;
            }

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
        return (
            <div className="edit-pin-form-container">
                <form className="edit-pin-form" onSubmit={this.handleSubmit}>
                        <div className="edit-pin-header">
                            <h1>Edit this Pin</h1>
                        </div>
                        <div className="edit-pin-middle-container">
                                <div className="pin-input-fields-pins-board">
                                    <div className="edit-field-input-container" id="edit-pins-board">
                                        <p className="board-edit-pins-board">Board</p> 
                                        <div className="drop-down-container" id="edit-pin-dropdown-container">                                       
                                            <div id="edit-pin-board-dropdown" className="create-pin-list-save" onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                                                {this.state.show ?
                                                    <ul className="edit-pin-dropdown">
                                                        {options} 
                                                    </ul>                                                    
                                                    : 
                                                    null
                                                }
                                                <div value={this.state.new_board_id ? this.state.new_board_id : this.state.board_id} data-id={this.state.board_name} 
                                                        className="edit-pin-default-board">
                                                    {this.state.board_name}
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    {/* <div className="edit-field-input-container">
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
                                    </div>*/}
                                </div> 
                                <div className="pin-image-container">   
                                    <img src={this.state.pin.photoUrl} alt="pin-image"/>
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

export default EditPinsBoard;