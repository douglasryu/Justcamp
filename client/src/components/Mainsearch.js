import React from "react";
import SearchIcon from '@material-ui/icons/Search';

class Mainsearch extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            "Camp Suger Pine",
            "Sky Ranch North Shelter",
            "Hobbit Cobin",
            "Paradise Shores Camping",
            "Red Cottage in the Woods",
            "Sky Valley View Camp",
            "High Prairie Camp",
            "Oakley Ridge Preserve",
            "Desert Oasis",
            "Rock Hill Campsite",
            "Dos Rios Tiny Home",
            "Silver Sunsets",
            "Lake Mead Overlook",
            "Pine Cabin",
            "Star Filled Skies",
        ];
        this.state = {
            suggestions: [],
            text: "",
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

    handleSubmit = event => {
        event.preventDefault();
        const array = [
            "Camp Suger Pine",
            "Sky Ranch North Shelter",
            "Hobbit Cobin",
            "Paradise Shores Camping",
            "Red Cottage in the Woods",
            "Sky Valley View Camp",
            "High Prairie Camp",
            "Oakley Ridge Preserve",
            "Desert Oasis",
            "Rock Hill Campsite",
            "Dos Rios Tiny Home",
            "Silver Sunsets",
            "Lake Mead Overlook",
            "Pine Cabin",
            "Star Filled Skies"
        ];
        const targetCamp = (array.indexOf(this.state.text) + 1);
        this.props.history.push(`/camps/${targetCamp}`);
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
        console.log(this.items);
        const { text } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="header__form">
                <SearchIcon className="header__search-icon" style={{ fontSize: 30 }} />
                <div className="searchbar__container">
                    <input onChange={this.handleSearchInput} type="search" value={text} className="search__input" placeholder="Try Camp Sugar Pine, Star Filled Skies..." />
                    {this.renderSuggestions()}
                </div>
                <select className="header__select">
                    <option>All camping</option>
                    <option>Camping</option>
                    <option>Glamping</option>
                    <option>RVs</option>
                </select>
                <button className="header__form-button">Search</button>
            </form>
        )
    }
}

export default Mainsearch;
