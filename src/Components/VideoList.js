import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem.js'; 
import './comp.css';

const VideoList=({videos,onVideoSelect})=>{
    
        const listofVideos=videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
        listofVideos.shift();
        
        return (
            <Grid container className='list-videos' spacing={10}>
                {listofVideos}
            </Grid>
            );
        
    
}

export default VideoList;
