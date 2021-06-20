import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem.js'; 

const VideoList=({videos,onVideoSelect})=>{
    
        const listofVideos=videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
        
        return (
            <Grid container spacing={10}>
                {listofVideos}
            </Grid>
            );
        
    
}

export default VideoList;