import React from 'react'
import Footer from './Footer'
import StickyNavbar from './Navbar'

const Contact = () => {
  return (
    <>
    <StickyNavbar/>
    <div className='bg-sky-100'>
       
    <div class=" py-20  text-center">
      <h1 class="text-blue-600 mb-10 font-bold text-2xl md:text-4xl"> We are here!</h1>
      <h1 class="mb-8 font-bold text-4xl md:text-6xl ">Contact us now!</h1>
      <p class=" text-gray-500 font-medium ">Please enter your details to contact us :)</p>
    </div>
    <div class="absolute flex w-full px-6 justify-center items-center">
      <div class="px-4 py-6 bg-white rounded-xl shadow-2xl overflow-hidden w-full md:w-8/12 md:p-14">
        <form class="">
          <div class="grid gap-2 mb-6 md:grid-cols-2">
              <div>
                  <label for="first_name" class="block mb-2 font-normal text-sm md:text-xl">Full Name</label>
                  <input type="" id="" class="input text-sm py-3  block w-full font-light" placeholder="Write your name here..." required />
              </div>
              <div>
                  <label for="last_name" class="block mb-2 font-normal text-sm md:text-xl">Email Address</label>
                  <input type="" id="" class="input py-3  text-sm  block w-full font-light" placeholder="Write your email address here..." required />
              </div>
              </div>
              <div class="w-full">
              <div>
                  <label for="last_name" class="block mb-2 font-normal text-sm md:text-xl">Subject</label>
                  <input type="" id="" class="input py-3  text-sm block w-full font-light" placeholder="Write your email address here..." required />
              </div>
        </div>
        <div class="w-full mt-6">
          <div class="relative textarea cursor-pointer">
            <label for="messag" class="leading-7 font-normal cursor-pointer text-sm md:text-xl">Description</label>
            <textarea id="messag" name="messag" class="py-3 font-light text-gray-50 border-none w-full bg-opacity-50 text-sm border-gray-300  focus:bg-white focus:ring-2 focus:ring-white outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Add a brief of your description'></textarea>
          </div>
        </div>
        <div>
          <div class="mb-6 mt-6 items-center justify-center">
            <button class="w-full rounded-lg  py-3  bg-blue-500 text-white hover:shadow-lg font-medium font-medium text-sm md:text-xl shadow-indigo-700/40 text-center">Contact now</button>
          </div>
        </div>
      </form>
      </div>
    </div>
    <div class="flex w-full bg-white items-center justify-center text-center mt-96 p-24 ">
      <div class=" bg-white  mt-36 ">
        <p class="text-blue-600 font-bold text-xl md:text-2xl">732-503-8255</p>
        <h1 class="mt-8 md:mt-24 font-bold text-2xl md:text-5xl">contact@admrt.com</h1>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Contact