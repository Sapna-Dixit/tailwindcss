import React from 'react';
import signIn from '../images/signin-removebg-preview.png';
import butterFly  from '../images/beautiful-gradient-logo-designs-22-removebg-preview.png'
const SignIn =()=>{
    return(
        <>
         <div className='xl:container w-full h-screen flex-grow flex-cols bg-gradient-to-br from-[#6177BB] via-[#CE89BC] to-[#6C7EB5] mx-auto justify-center items-center'>
             <div className='md:flex md:flex-row bg-transparent justify-center items-center self-center absolute top-1/4 mx-auto mx-32 mb-4'>
                 <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 rounded-tl-xl rounded-bl-3xl rounded-tr-3xl rounded-br-xl border-gray-500  bg-white drop-shadow-2xl ...'>
                     <div className='w-full rounded-tl-xl rounded-bl-3xl'>
                        <div className='bg-blue-300 w-12 md:w-48 sm:w-32 float-right mt-2 justify-center items-center text-center mr-1 py-2 px-2 rounded-bl-3xl rounded-br-md rounded-tr-md'>
                           <button className='text-gray-100 font-bold xl:text-md sm:text-sm m-0 m-auto'>SIGN IN</button>
                        </div>
                        <div className='my-8 float-left md:shrink-0'>
                           <img src={signIn}/>
                        </div>
                     </div>
                     <div className='w-full bg-[#F1D7F3] shadow-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-xl drop-shadow-xl ...'>
                        <div className='w-1/4 m-0 m-auto mt-6'>
                           <img src={butterFly} className='w-full'/>
                        </div>
                        <div  className='w-2/4 m-0 m-auto my-8'>
                           <div className="mb-4">
                              <input type="email" placeholder="Email" className='w-full h-1/4 shadow-2xl shadow-white-200 bg-indigo-200 px-2 py-2 placeholder-black rounded-lg focus:outline-none focus:ring-1'/>
                           </div>
                           <div className="mb-1">
                              <input type="password" placeholder="Password" className='w-full h-1/4 shadow-2xl shadow-white-200 bg-indigo-200 px-2 py-2 rounded-lg placeholder-black focus:outline-none focus:ring-1'/>
                           </div>
                           <div className='mb-4 text-right'>
                              <a className="inline-block text-md hover:text-blue-darker mb-3" href="#">Forgot your password?</a>
                           </div>
                           <div className='mb-4 items-center'>
                              <button className="bg-[#FFFFFF] text-[#6C7EB5] px-4 py-3 sm:text-sm xl:text-md font-bold rounded-lg" href="#">Sign In</button>
                           </div>

                        </div>
                     </div>
                 </div>
             </div>
          </div>
        </>
    )
}

export default SignIn;