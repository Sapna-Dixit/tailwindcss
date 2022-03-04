import React from 'react';
import img1 from './images/svg.png'
import img2 from './images/img2.png';
import img3 from './images/download-removebg-preview (1).png'
import img4 from './images/download-removebg-preview.png'
import img5 from './images/download__1_-removebg-preview.png'

const Login=()=>{
    return(
        <>
          <div className="md:w-full md:h-auto flex-grow flex flex-col ">
            <div className="md:w-full md:h-auto flex-grow">
              <div class="flex flex-col md:w-2/4 md:h-auto bg-white shadow-2xl m-0 m-auto max-auto md:flex-shrink-0">
              <img  className="rounded-tl-2xl rounded-tr-2xl" src={img1}/> 
                <div className="w-2/4 text-blue-400  m-0 m-auto">
                    <h3 className="md:text-5xl font-bold sm:text-sm text-left mb-2">Login</h3>
                       <div className='mb-4'>
                       <label className="block text-md text-blue-400 text-left mt-2" for="email">Email</label>
                       <input type="email" name="Email" placeholder=" Enter Email" id ="email"className="w-full mb-2 h-1/4 px-4 py-2 border border-blue-400 rounded-xl shadow-none focus:outline-none focus:ring-1"/><br/>
                       </div>
                      <div class="mb-4">
                      <label className="block text-md text-blue-400 text-left mt-2" for="email">Password</label>
                        <input type="password" name="password" placeholder=" Enter Password" className="w-full h-1/4 mb-2 px-4 py-2 border border-blue-400 border-2 shadow-none rounded-xl focus:outline-none focus:ring-1"/><br/>
                      </div>
                      <div className='mb-4 text-right'>
                        <a className="inline-block text-md hover:text-blue-darker mb-3" href="#">Forgot Password?</a>
                      </div>
                    <div className="flex items-center inline-block">
                      <div className="w-1/6 md:h-1/6 ml-6 sm:mb-4  shadow-md shadow-gray-500 rounded-xl">
                        <a href="#"><img className="w-full h-full" src={img3}/></a>
                        </div>
                      <div className="w-1/6 h-1/6 ml-6 sm:mb-4  shadow-md shadow-gray-500 rounded-xl">
                       <a href="#"> <img className="w-full h-full" src={img4}/></a>
                      </div>
                      <div className="w-1/6 h-1/6 ml-6 sm:mb-4 shadow-md shadow-gray-500 rounded-xl items-center">
                       <a href="#"> <img class="w-full h-full" src={img5}/></a>
                      </div>
                    </div>
                </div>
             <div className='relative md:w-full md:h-auto md:flex'>
             <img className="h-auto rounded-2xl" src={img2}/>
                <div className="flex flex-row absolute justify-between mb-4 items-center w-full h-auto text-blue bottom-0">
                  <div className="w-2/4 text-white md:text-md"><a href="#">New Here?<b>Register</b></a></div>
                  <div className="w-1/4  font-bold rounded-md m-0 md:m-auto">
                    <button type="button" className="md:w-3/4 h-10 md:mx-auto text-white bg-transparent border border-white-400 font-semibold py-2 px-2 rounded-md shadow-lg md:self-start">
                      Login</button>
                  </div>
                </div>
             </div>
              </div>
            </div>
            
          </div>
        </>
    )
}
export default Login;