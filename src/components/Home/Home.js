import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from './Hook/useReview';

const Home = () => {
    const [reviews, setReviews] = useReview()

    return (
        <div className=''>
            <div className='flex justify-around items-center mt-10'>
                <div className='text-5xl font-mono font-extrabold text-cyan-500'>
                    <h1> Mission to Mars 2030</h1>
                    <h1><span className='text-amber-600 underline underline-offset-2'>Human mission to Mars</span></h1>
                    <p className='text-sm m-4'>The idea of sending humans to Mars has been the subject of aerospace engineering and scientific studies since the late 1940s as part of the broader exploration of Mars. Some have also considered exploring the Martian moons of Phobos and Deimos.terraforming the planet. Proposals for human missions to Mars came from e.g. NASA, Russia, Boeing, SpaceX, and the Inspiration Mars Foundation. As of 2022, only rovers have been on Mars. The farthest humans have been beyond Earth is the Moon.</p>
                    <a class="bg-amber-600 hover:bg-cyan-500 text-sm text-white py-2 px-4 rounded-full" href="https://www.nasa.gov/content/nasas-journey-to-mars/"> Read Article</a>
                       
               
                </div>


                <img className="w-2/4" src="mars.png" />
            </div>


            <h2>Public Reaction about Mars Misson 2030</h2>
            <div className="grid grid-cols-3 gap-8 m-20 shadow-blue-500/50">
                {
                    reviews.slice(0, 3).map(review => <CustomerReview key={review.position}
                        review={review}>
                    </CustomerReview>)
                }
            </div>
            <div className="">
                <Link to='/reviews'>See more Reviews</Link>
            </div>


        </div>
    );
};

export default Home;