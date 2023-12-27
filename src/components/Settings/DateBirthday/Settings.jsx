import React from 'react'
import Footer from '../../Footer';
import StickyNavbar from '../../Navbar';
import DatePickerPage from './DatePickerPage';
import './style.css'

const Settings = () => {

  return (
    <div>
      <StickyNavbar/>
      <div class="md:flex  my-12 bg-white m-auto max-w-screen-2xl justify-center items-center px-4 py-6 sm:px-6 lg:px-8">
        <div class="w-full h-96 border  border-gray-100 bg-white py-8 px-3 md:px-10 mb-5 rounded-2xl md:0  md:w-1/3">
            <div className=''>
                <div class="mb-6">
                    <h3 class="font-bold text-2xl text-start">Settings</h3>
                </div>
                <div class="mx-auto">
                <div class=" ">
                    <button class="flex mt-8 w-full text-lg font-medium p-4 rounded-2xl  mb-2.5 bg-gray-100">
                        <img class="mr-4" src="./account.svg" alt="" />
                        Account
                    </button>
                    <a href='/qwerty'>
                    <button class="flex w-full mt-8 text-lg font-medium p-4 mb-2.5 rounded-2xl hover:bg-gray-100">
                        <img class="mr-4" src="./Billings.svg" alt="" />
                        Billings
                    </button>
                    </a>
                    <button class="border mt-8 w-full  text-lg bg-white rounded-2xl font-medium p-4 hover:text-red-500">Logout</button>
                </div>
              </div>
              </div>
          </div>
            <div class="w-full  md:w-2/3 md:ml-8 py-8 px-3 md:px-10 border border-gray-100 bg-white p-4 rounded-2xl">
              <div class="text-start">
                  <div class="mb-6">
                      <h3 class="font-bold  text-xl">Account Settings</h3>
                  </div>
           
                 
                      
<form>
  <div class=" grid gap-6 mb-6 md:grid-cols-2">
      <div>
          <label for="first_name" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Full Name</label>
          <input type="text" id="first_name" class="bg-gray-50 border px-4 py-3 text-base border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required />
      </div>

      <div class="">
        <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="expample@gmail.com" required />
     </div> 

  
     <div>
     <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Birthday</label>
       <DatePickerPage/>
      </div>

 
      <div>
          <label for="phone" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Phone number</label>
          <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
      </div>
   </div>

   </form>
 </div>
        
                  <div>
                    <div class="mb-6 mt-10 py-6 text-center md:text-end">
                      <button class="w-full md:w-64 rounded-lg  py-3  bg-blue-500 text-white hover:shadow-lg font-medium font-medium text-sm md:text-base shadow-indigo-700/40 text-center">Save Change</button>
                    </div>
                  </div>
            
                </div>
                </div>
                <Footer/>
            </div>
  )
}

export default Settings;
