import React from 'react';
import Video from './Video';

export default function HomeHeroText() {
    return (
        <>
            <div className='font-[font1] pt-5 text-center'>
                <div className='uppercase text-[9.5vw] leading-[8vw]'>The spark for</div>
                <div className='uppercase text-[9.5vw] justify-center items-start flex leading-[8vw]'>all
                    <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
                        <Video />
                    </div>
                    thing
                </div>
                <div className='uppercase text-[9.5vw] leading-[8vw]'>creative </div>
            </div>
        </>
    );
}
