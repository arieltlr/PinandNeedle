import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: "",
        }
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            searchInput: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();


        this.props.searchPins({search: this.state.searchInput});

        this.props.history.push({
            pathname: "/search",
            search: `?resulst=${this.state.searchInput}`
        })
    }

    render(){
        return (
            <form>
                <input 
                    className="nav-ele" 
                    id="search-bar" 
                    type="text" 
                    placeholder="Search"
                    value={this.state.searchInput}
                    onChange={this.handleChange()} />
            </form>
        )
    }
}
export default withRouter(SearchBar)