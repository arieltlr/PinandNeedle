import React from 'react';

class Boards extends React.Component {

    render() {
        return (
            <div id="boards">
                <h1>{this.props.boards}</h1>
            </div>
        )
    }
}

export default Boards;