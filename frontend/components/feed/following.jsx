import React from 'react';

class Following extends React.Component {

    render() {
        return (
            <div id="feed">
                <h1 id="following-holder">Pins from people you follow</h1>
                <section className="feed-images">
                    <img className="feed-image" id="feed1" src={window.spools} alt="annie spratt" />
                    <img className="feed-image" id="feed2" src={window.brown_sweater} alt="brown knit sweater" />
                    <img className="feed-image" id="feed3" src={window.pin_cushion} alt="pins" />
                    <img className="feed-image" id="feed4" src={window.textiles} alt="toa heftiba" />
                </section>
            </div>
        )
    }
}

export default Following;