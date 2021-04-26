import React from 'react';
import { connect} from 'react-redux';
import SearchResult from './search_result';
import { openModal } from '../../actions/modal_actions';
import { createAssoc } from '../../actions/boards_pins_actions';
import { getPins } from '../../actions/pin_actions';



const mapStateToProps = (state, ownProps) => {
    
    return {
        search: state.entities.search,
        pins: state.entities.pins
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        createAssoc: (assoc) => dispatch(createAssoc(assoc)),
        getPins: () => dispatch(getPins()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);