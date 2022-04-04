import React from 'react';

const Home = () => {
   
    return (
        <div className=''>
            <div className='flex justify-around items-center mt-10'>
                <div className='text-5xl font-mono font-extrabold text-cyan-500 '>
                    <h1>Mars Mission 2030</h1>
                    <h1><span className='text-amber-600 underline underline-offset-2'>Human mission to Mars</span></h1>
                    <p className='text-sm'>The idea of sending humans to Mars has been the subject of aerospace engineering and scientific studies since the late 1940s as part of the broader exploration of Mars. Some have also considered exploring the Martian moons of Phobos and Deimos.[1] Long-term proposals have included sending settlers and terraforming the planet. Proposals for human missions to Mars came from e.g. NASA, Russia, Boeing, SpaceX, and the Inspiration Mars Foundation. As of 2022, only rovers have been on Mars. The farthest humans have been beyond Earth is the Moon.</p>

                </div>

                <img className="w-2/4" src="mars.png" />
            </div>


            <div className="">
                

            </div>



        </div>
    );
};

export default Home;