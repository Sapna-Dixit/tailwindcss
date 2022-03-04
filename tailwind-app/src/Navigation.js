import {Navbar, Nav, Container } from "react-bootstrap"

const  Navigation =()=>{
    return(
            <>
               <div className='container mx-auto p-5'>
                    <div className='md:flex md:flex-row md:justify-between text-center text-sm sm:text-base'>
                        <div className='mt-2'>
                            <a href="/" className='text-gray-600 hover:text-purple-600 p-4'>Home</a>
                            <a href="/login" className='text-gray-600 hover:text-purple-600 p-4'>Login</a>
                            <a href="/register" className='text-gray-600 hover:text-purple-600 p-4'>Register</a>
                            <a href="/Test" className='text-gray-600 hover:text-purple-600 p-4'>Test</a>
                        </div>
                    </div>
                </div>
            </>
    )
};
export default Navigation;