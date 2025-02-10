import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const Work = () => {
  return(
    <section className='section' id='work'>
    <div className='container mx-auto'> 
       <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div> 
                <h2 className='h2 leading-tight text-accent'>
                My Latest <br/>
                Work. 
                </h2>
                <p className='max-w-sm nb-16'>
                      LoremLorem ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto autem possimus commodi quia debitis? Saepe commodi culpa,
                      mollitia ex nostrum dignissimos</p>
                      <button className='btn btn sm '> Vieu all projects</button>
                </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src =  {img1} alt ='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                    <span className='text-gradient'> UI/UX Design </span>
                      </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                   <span className='text-3xl text-white'> Project Title</span>
                </div>
               
            </div>
        </div>
          <div>2</div>
       </div>
    </div>
    </section>
  )
  
};

export default Work;         
