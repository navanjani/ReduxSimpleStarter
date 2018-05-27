import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyAtqm4LVFeUHy-X4a9M3jDhaVklWiW0r3k';

import SearchBar from './components/search_bar';

// Create component.This should produce some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//  Put component's genrated HTML  in to the page

ReactDOM.render(<App />, document.querySelector('.container'));