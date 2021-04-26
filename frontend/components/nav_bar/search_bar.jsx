import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            search: `?results=${this.state.searchInput}`
        })
        this.setState({searchInput: ""});
    }

    render(){
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input 
                    // className="nav-ele" 
                    id="search-bar" 
                    type="text" 
                    placeholder="Search"
                    value={this.state.searchInput}
                    onChange={this.handleChange} />
            </form>
        )
    }
}
export default withRouter(SearchBar);