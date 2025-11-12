import React from 'react';
import image from '../../assets/videos/home-video.mp4';

export default function Video() {
    return (
        <div className='h-full w-full'>
            <video className='h-full overflow-hidden w-full object-cover' autoPlay loop muted src={image}></video>
        </div>
    );
}
