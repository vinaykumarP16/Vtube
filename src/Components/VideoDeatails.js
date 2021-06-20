import React from 'react';
import './comp.css';


const VideoDeatails=({video})=>{

    if(!video) return <div>Loading....please wait</div>
        console.log(video);

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
   

    return(
            
            <div className="videodetail">
                <div className="mainvideo" >
                    <iframe src={videoSrc} frameborder="0" 
                                 width="100%" height="100%" 
                                 title="video Player"/>
                </div>
                <div className="mainvideodet">
                    <h4 className="maintitle" >{video.snippet.title} </h4>
                    <h3 className="channelname">{video.snippet.channelTitle}</h3>

                    {/*<h3 className="desc"> {video.snippet.description}</h3>*/}
                </div>
            </div>






           
         )
}


export default VideoDeatails;