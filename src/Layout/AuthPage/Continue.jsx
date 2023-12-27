/** @format */
import React, { useState } from "react";
import svg from './images/megaphone 1.svg';
import svg1 from './images/megaphone 1 (1).svg';
import svg2 from './images/Group.svg';
import svg3 from './images/ic_google logo (1).svg';
import svg4 from './images/ic_fb logo.svg';
import '../style.css'
import SlideShow from '../SlideShow'

function Continue() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container min-h-screen md:flex ">
      <div className="md:w-1/2">
        <SlideShow />
      </div>
      <section class="max-w-screen-2xl  mx-auto px-4 h-full justify-center items-center">
        <div class="flex  w-full h-full  flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white max-w-2xl rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div class="">
              <h1 class="mb-2 font-normal text-3xl lg:text-5xl sm:text-3xl">
                Create An Account
              </h1>
              <p class="mt-2 text-base font-light md:mt-16">Already have an account? <span class="text-purple-700 font-normal cursor-pointer"><a href="/">Login</a></span></p>
              <p class="my-4 text-gray-400">Join as an <span class="text-blue-500 cursor-pointer">ad space host</span>  or as <span class="text-purple-700 cursor-pointer">an advertiser</span> </p>
              <div class="gap-4 w-full  md:flex">
                <div class="relative mt-2 w-full md:w-1/2 py-3 md:py-7 rounded-xl font-medium text-gray-700">
                  <input class="j2x7_17hqRVmwte_tWFa peer hidden" type="radio" name="framework" id="googlePay" value="googlePay" />
                  <label class="absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-700 peer-checked:text-blue-700  peer-checked:shadow-2xl peer-checked:duration-500 peer-checked:opacity-100" for="googlePay"></label>
                  <div className="text-center">
                    <div className="flex justify-center items-center">
                      <img class=" w-14 md:w-20" src={svg} alt="icon" />
                    </div>
                    <p class="font-light">Join as an ad space host</p>
                  </div>
                </div>
                <div class="relative w-full md:w-1/2 mt-2 py-3 px-3 md:py-7 rounded-xl font-medium text-gray-700">
                  <div className="flex justify-center items-center">
                    <input class="j2x7_17hqRVmwte_tWFa peer hidden" type="radio" name="framework" id="applePay" value="applePay" />
                    <label class="absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-700 peer-checked:text-blue-700 peer-checked:shadow-2xl peer-checked:duration-500 peer-checked:opacity-100" for="applePay"></label>
                    <div className="text-center">
                      <div className="flex justify-center items-center">
                        <img class=" w-14 md:w-20" src={svg1} alt="icon2" />
                      </div>
                      <p class="font-light hover:font-normal">Join as an advertiser</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 md:mt-8 social-card bg-blue-500 text-white google border rounded-xl  py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
                <button class=" text-center   text-gray-800 font-normal py-1 md:py-2 px-4 rounded inline-flex items-center">
                  <span class="ml-1 md:ml-2 text-white"><a href="/registasion">Continue</a></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Continue;
