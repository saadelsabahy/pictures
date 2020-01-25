import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchText: '',
    };
    onFormSubmit = async event => {
        event.preventDefault();
        await this.props.onSubmit(this.state.searchText);
    };
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div
                        className="ui big icon input"
                        style={{ width: '100%' }}>
                        <i className="search icon" />
                        <input
                            type="text"
                            name="search"
                            placeholder="search"
                            value={this.state.searchText}
                            onChange={event =>
                                this.setState({
                                    searchText: event.target.value,
                                })
                            }
                            autoComplete={'off'}
                            autoFocus
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
