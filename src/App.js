import React, { Component } from 'react';
import {SearchBar,VideoDeatails,VideoList} from './Components';
import youtube from './api/youtube.js';
import Footer from './Footer.js';
import './mainstyle.css';

export default class App extends Component {
    state={
        video:[],
        selectedVideo:null,

    }

    componentDidMount(){
        this.handleSubmit('safari serena');
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }


    handleSubmit=async (searchTerm)=>{
        const response=await youtube.get('search',{
            params : {
                part:'snippet',
                maxResults:6,
                key:'AIzaSyAIG5F-FFGq968l9rfQgGQE66eS_5Zh9sg',
                q:searchTerm,
                }
        });
        this.setState({
            video:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    render() {
        const{selectedVideo,video}=this.state;

        return (
            <div>
                <div className="main">
                    <div className="subdiv">
                        <div className="searchbar">
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </div>
                        <br/>

                        <div className="videodetail">
                            <VideoDeatails video={selectedVideo}/>  
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="videolist">
                            <VideoList videos={video} onVideoSelect={this.onVideoSelect}/>
                        </div>
                        <br/>
                    </div>
                </div>    
                <Footer/>
            </div>
        );
    }
}
