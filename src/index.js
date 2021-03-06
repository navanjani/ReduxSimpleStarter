import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = '';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';



// Create component.This should produce some HTML

class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) =>{
            this.setState({videos});
        });
    }

    render(){
    return (
        <div>
            <SearchBar />
            <VideoList  videos = {this.state.videos}/>
        </div>
        );
    }
}
   


//  Put component's genrated HTML  in to the page

ReactDOM.render(<App />, document.querySelector('.container'));