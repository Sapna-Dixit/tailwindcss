import React from'react'
import heroImg from './images/hero-img.svg';
import men1 from './images/product/men/product1.jpg'
import men2 from './images/product/men/product2.jpg'
import men3 from './images/product/men/product3.jpg'
import men4 from './images/product/men/product4.jpg'
import  women1 from './images/product/women/product1 (1).jpg';
import  women2 from './images/product/women/product2.jpg';
import  women3 from './images/product/women/product3.jpg';
import  women4 from './images/product/women/product4.jpg';
import subscribe from './images/subscribe-banner.png';
const Test =()=>{
    return(
            <>
                <div className='container mx-auto p-5'>
                    <div className='md:flex md:flex-row md:justify-between text-center text-sm sm:text-base'>
                        <div className='flex flex-row justify-center'>
                            <div className='bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg'></div>
                            <h1 className='text-3xl text-gray-600 ml-2'>Logo</h1>
                        </div>
                        <div className='mt-2'>
                            <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Home</a>
                            <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Shop</a>
                            <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Blog</a>
                            <a href="#" className='text-gray-600 hover:text-purple-600 p-4'>Contact</a>
                            <a href="#" className='bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                 </svg>
                                Cart (0)</a>
                        </div>
                    </div>
                    {/* <Main Navigation.....> */}

                    <div className='md:flex md:flex-row mt-20'>
                        <div className='md:w-2/5 flex flex-col justify-center items-center'>
                            <h2 className='font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left'>Some Catchy Title Here</h2>
                            <p className='uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left'>Our brand tagline here</p>
                            <p className='uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left'>Our brand motto goes here</p>
                            <a href="#" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop Now</a>
                        </div>
                        <div className='md:w-3/5'>
                            <img src={heroImg} className='w-full'/>
                        </div>
                    </div>
                    {/* Hero section end */}
                    <div className='my-20'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-3xl'>Men's Collection</h2>
                            <a href="#" className='text-xl flex flex-row'>
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </a>
                        </div>
                        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={men1} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Men's T-Shirt</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={men2} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Slim Khaki Tousers</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={men3} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Nike Shoes</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={men4} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Wirst Watch</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>


                    </div>
                    <div className='my-20'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-3xl'>Women's Collection</h2>
                            <a href="#" className='text-xl flex flex-row'>
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </a>
                        </div>
                        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={women1} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">V Neck Tassel Cape</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={women2} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Printed Wrap Dress</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={women3} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">Blue Denim Dress</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='shadow-lg rounded-lg'>
                                <a href="#">
                                    <img src ={women4} className='rounded-tl-lg rounded-tr-lg'/>
                                </a>
                                <div className='p-5'>
                                    <h3 className='text-left'><a href="#">High Waist Denim Skirt</a></h3>
                                    <div className='flex flex-row my-3'>
                                        <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                        <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                                    </div>
                                    <div className='flex flex-row my-3'>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>XXL</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>L</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>M</div>
                                        <div className='border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2'>S</div>
                                    </div>
                                    <div className='flex flex-row xl:flex-row justify-between'>
                                    <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                         Add to cart
                                    </a>
                                    <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        View Details
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>
                        <div className='rounded-lg shadow-lg my-20 flex flex-row'>
                            <div className='lg:w-3/5 w-full bg-gradient-to-r bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12'></div>
                            <div className='w-2/5'>
                                <img src={subscribe} className='h-96'/>
                            </div>
                        </div>


                    </div>
                </div>
            
            </>

    )
}
export default Test;