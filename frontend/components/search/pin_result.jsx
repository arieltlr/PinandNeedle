import Reach from 'react';

class PinResult extends React.Component{
    render(){
        const { search } = this.props;

        const pinResults = search.pins.map((idx) => {
            let pin = this.props.pins[idx];
            return <PinResult pin={pin}/>
        })

        
    }
}

export default PinResult;