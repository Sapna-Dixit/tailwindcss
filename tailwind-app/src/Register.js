import React from 'react';
import img1 from './images/svg.png'
import img2 from './images/img2.png';

const Register=()=>{
    return(
        <>
           <div className="md:w-full md:h-auto flex-grow flex flex-col ">
            <div className="md:w-full md:h-auto flex-grow">
              <div class="flex flex-col md:w-2/4 md:h-auto bg-white shadow-2xl m-0 m-auto max-auto md:flex-shrink-0">
              <img  className="rounded-tl-2xl rounded-tr-2xl" src={img1}/> 
                <div className="w-2/4 text-blue-400 m-0 m-auto">
                    <h3 className="md:text-5xl font-bold sm:text-sm text-left mb-2">Register</h3>
                    <div className='mb-4 text-right'>
                    <label className="block text-md text-blue-400 text-left mt-2" for="fname">FullName</label>
                       <input type="text" name="FullName" placeholder=" Enter FullName" id ="fname"className="w-full mb-2 h-1/4 px-4 py-2 border border-blue-400 border-2 rounded-xl shadow-none focus:outline-none focus:ring-1"/><br/>
                      </div>
                       <div className='mb-4'>
                       <label className="block text-md text-blue-400 text-left mt-2" for="email">Email</label>
                       <input type="email" name="Email" placeholder=" Enter Email" id ="email"className="w-full mb-2 h-1/4 px-4 py-2 border border-blue-400 border-2 rounded-xl shadow-none focus:outline-none focus:ring-1"/><br/>
                       </div>
                      <div>
                      <label className="block text-md text-blue-400 text-left mt-2" for="email">Password</label>
                        <input type="password" name="password" placeholder=" Enter Password" className="w-full h-1/4 mb-2 px-4 py-2 border border-blue-400 border-2 border-solid shadow-none rounded-xl focus:outline-none focus:ring-1"/><br/>
                      </div>
                </div>
             <div className='relative md:w-full md:h-auto md:flex justify-between items-center '>
             <img className="h-auto rounded-2xl" src={img2}/>
                <div className="flex flex-row absolute mb-4 justify-between items-center w-full h-auto text-blue bottom-0">
                  <div className="w-3/4 text-white text-md"><a href="#">Already Registered ?<b>Login</b></a></div>
                  <div className="w-1/4 bg-blue  font-bold rounded-md m-0 md:m-auto">
                    <button type="button" className="md:w-3/4 h-auto md:mx-auto text-white bg-transparent font-semibold py-2 px-2 text-md border border-white-400 rounded-xl shadow-lg md:self-start">
                      Register</button>
                  </div>
                </div>
             </div>
              </div>
            </div>
            
          </div>
        </>
    )
}
export default Register;