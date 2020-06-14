import React from "react";

class Mainsearch extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'Camp Suger Pine',
            'Sky Ranch North Shelter',
            'Hobbit Cobin',
            'Paradise Shores Camping',
            'Red Cottage in the Woods',
            'Sky Valley View Camp'
        ];
        this.state = {
            suggestions: [],
            text: ""
        };
    }

    handleSearchInput = event => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, "i");
            suggestions = this.items.sort().filter(val => regex.test(val));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected(value) {
        this.setState(({
            text: value,
            suggestions: []
        }));
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) return null;
        return (
            <ul className="search__suggestion-wrapper">
                {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSelected(item)} className="search__suggestion"><img className="search__suggestion-logo" src={require("../assets/app_logos/logoblack.svg")} alt="suggestion-logo" /> {item}</li>)}
            </ul>
        )
    }

    render() {
        const { text } = this.state;
        return (
            <div className="searchbar__container">
                <input onChange={this.handleSearchInput} type="search" value={text} className="search__input" placeholder="Try Camp Sugar Pine, Star Filled Skies..." />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default Mainsearch;
