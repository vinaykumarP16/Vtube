import React from 'react';
import './comp.css';

const VideoItem = ({ video, onVideoSelect}) => {
  return (
    <div className="mainvideoitem">
        <div className="videotile" onClick={()=>onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
          <br/>
          <p className="title"><b>{video.snippet.title}</b></p>
        </div>
    </div>
  )
}

export default VideoItem;