import React from 'react';
import BoardsContainer from '../boards/boards_container';

class Profile extends React.Component {

    componentDidMount(){
        this.props.getBoards(this.props.match.params.userId)
    }
    render() {
        debugger
        if (!this.props.email[0]){
            return null;
        }
        const thisProfile = this.props.thisProfile;
        const email = this.props.email;
        const emailName = email.split('@')[0].toUpperCase()
        const profileLetter = email[0].toUpperCase()
        debugger
        
        // const boards = this.props.boards.map((board, index) => {
        //     return (
        //         <div className="board-container">
        //             <div className="board">
        //                 <div className="">
        //                 </div>  

        //             </div>

        //         </div>
        //     )
        // })
        return (
            
            <div>
                <div id="profile-page">
                    <div id="profile-circle">
                        <p id="profile-page-letter">{profileLetter}</p>
                    </div>
                    <h1 id="profile-page-username">{emailName}</h1>
                </div>
                <div>
                    {this.props.boards[0].name}
                </div>
            </div>
        )
    }
}

export default Profile;