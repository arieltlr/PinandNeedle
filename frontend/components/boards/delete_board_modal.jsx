import React from 'react';

class DeleteBoard extends React.Component {
    render(){
    return (
        <div>
            <h1>Are you sure?</h1>
            <p>Once you delete a board and all it's Pins, you can't undo it!</p>
            <button onClick={()=>props.openModal('edit-board')}>Cancel</button>
            <button onClick={() => props.deleteBoard(props.board.id)}>Delete Forever</button>
        </div>
    )}
}
export default DeleteBoard;