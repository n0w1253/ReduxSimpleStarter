import React, {Component} from 'react';

class SearchBar extends Component {  //class based component, aspect of state

    constructor(props) {
        super(props);

        this.state = {term: 'surfboards'};  // = only used in constructor ,elsewhere use setState
    }

    render() {
        return (
            <div className="search-bar">
                <input //controlled component
                    value = { this.state.term }
                    onChange={event => this.onInputChange(event.target.value)}/>

            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;