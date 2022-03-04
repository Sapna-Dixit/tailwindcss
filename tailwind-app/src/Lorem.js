import React from 'react';
import image from './logo-design-removebg-preview.png'
import img1 from './images/svg.png'
import img2 from './images/img2.png'

const Lorem=()=>{
    return(
        <>
           <div className="md:w-full md:h-auto flex-grow flex flex-col ">
            <div className="md:w-full md:h-auto flex-grow">
              <div class="flex flex-col md:w-2/4 md:h-auto bg-white shadow-2xl m-0 m-auto max-auto md:flex-shrink-0">
              <img  className="rounded-tl-2xl rounded-tr-2xl" src={img1}/> 
                <div className="w-2/4 text-blue-500 m-0 m-auto">
                    <img className="items-left mb-2 w-28 h-28" src={image}/>
                    <h1 className="block text-3xl text-blue-400 font-bold text-left mt-2">Lorem</h1>
                    <div className='mb-2'>
                       <p className="block text-md text-blue-400 text-left mt-2">
                       In publishing and graphic design, Lorem ipsum is a placeholder text commonly used todemonstrate the visual form of a document or a typeface without relying on meaningful content.
                       </p>
                    </div>
                </div>
             <div className='relative md:w-full md:h-auto md:flex justify-between items-center '>
             <img className="h-auto rounded-2xl" src={img2}/>
                <div className="flex flex-row absolute mb-4 justify-between items-center w-full h-auto text-blue bottom-0">
                  <div className="w-2/4 text-white text-sm"></div>
                  <div className="w-2/4 bg-blue hover:bg-blue-dark bg-transparent font-bold rounded-md m-0 md:m-auto">
                    <button type="button" className="md:w-3/4 h-10 md:mx-auto text-white bg-transparent border border-white-400 font-semibold py-2 px-2 text-sm rounded-xl shadow-lg md:self-start">
                      Get Started</button>
                  </div>
                </div>
             </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default Lorem;