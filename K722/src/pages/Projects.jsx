import React from 'react';

export default function Projects() {
    return (
        <>
            <div className='p-4'>
                <div className='bg-red-200 pt-[45vh]'>
                    <h2 className='font-[font1] text-[9vw] uppercase'>Projets</h2>
                </div>
                <div>
                    <div className='w-full h-[800px] flex gap-4 bg-amber-400 -mt-20'>
                        <div className='w-1/2 h-full bg-green-900'></div>
                        <div className='w-1/2 h-full bg-blue-900'></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
