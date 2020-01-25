import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchBar';
import ImageList from './ImageList';

class App extends Component {
    state = { searchResult: [], loading: false };
    onSubmit = async term => {
        this.setState({ loading: true });
        await this.setState({ searchResult: [] });
        let response = await unsplash.get('search/photos', {
            params: { query: term, per_page: 100 },
        });
        console.log(response.data.results);
        this.setState({ searchResult: response.data.results }, () =>
            this.setState({ loading: false })
        );
    };
    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmit} />

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',

                        margin: '10px',
                    }}>
                    <ImageList
                        images={this.state.searchResult}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default App;
