import React from 'react';
import check from '../Layout/AuthPage/images/check.svg';
import arrow from '../Layout/AuthPage/images/arrow.svg';
import bg from '../Layout/AuthPage/images/marketing-pillar-page-marketing-overview_0.png';
import bg1 from '../Layout/AuthPage/images/marketing-pillar-page-marketing-job-outlook-salary.png';
import bg2 from '../Layout/AuthPage/images/marketing-pillar-page-types-of-marketing.png';
import fff from '../images/C0D4C3B0-111B-41CF-952D-926464E01F8F.jpeg';
import per1 from '../Layout/AuthPage/images/per1.svg'
import per2 from '../Layout/AuthPage/images/per2.svg'
import per3 from '../Layout/AuthPage/images/per3.svg'
import Footer from './Footer';

const Header = () => {
  return (
    <div>
      <div class=" h-full my-20 px-5">
        <div class="text-center items-center">
          <h1 class=" font-bold text-4xl">How it <span class="text-blue-600">Works</span> </h1>
          <p class="font-normal text-lg mt-2.5 text-gray-400">“Promote smarter – here is how! </p>

        
        </div>
        <div class=" mt-32 mb-4 max-w-full mx-auto max-w-screen-2xl max-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-20">
          <div class=" number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-first lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">1</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Search for ad spaces</h2>
              <p class="text-gray-500 -relaxed">Use our website to find the proper ad space. Filter ad spaces based on type, price, views, demographic and geographic areas.</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">2</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Connect</h2>
              <p class="text-gray-500 -relaxed">Message ad space and describe what type of promotion you are looking for</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-5 lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">3</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Reach an Agreement</h2>
              <p class="text-gray-500 -relaxed">Discuss and agree on promotion specifications, availability, pricing and posting date.</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-5 lg:order-none ">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">4</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Results</h2>
              <p class="text-gray-500 -relaxed">See your content on the ad space. Share your experience and leave a review.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-sky-100 py-10 md:py-0">
        <div class="md:flex max-w-6xl mx-auto p-6 px-8 md:p-24   md:mb-10 md:px-8  xl:px-5">
          <div class="w-full md:w-1/2 md:ml-8 items-center ">
            <div class="">
              <h1 class="font-bold text-4xl -10">Sell your <span class="text-blue-600">ad space</span></h1>
              <p class="font-normal text-sm -6 mt-4">Here’s how in three simple steps.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Sign up as an space host.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Setup your account and get verified.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Get advertisers to contact you.</p>
            </div>
            <div class="flex mt-4 font-bold text-base -7">
              <span class="cursor-pointer text-blue-600">Get Started</span>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-8 xl:px-5">
            <div>
              <section class="duration-700 container rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 px-8 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-extrabold text-sm -7">Sign up as an space host.</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="container rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 px-8 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-extrabold text-sm -7">Setup your account and get verified.</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg1} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="container rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 px-8 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-extrabold text-sm -7">Discuss ad campaigns with potential clients</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg2} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex items-center justify-end max-w-screen-2xl px-8 py-10 md:py-0 mx-auto xl:px-5">
        <div class="md:w-3/5 w-full mb-6 md:mb-0">
          <img class="" src={fff} alt="" />
        </div>
        <div class="md:w-2/5 md:ml-8 items-center ">
          <div class="">
            <h1 class="font-bold text-4xl -10">Why use AdMrt?</h1>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">AdMrt will eliminate the middleman and enable you to directly connect and communicate with ad hosts.</p>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">Currently agencies take 30-50% of revenue from publishers. Admrt takes less fees than current agencies.</p>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">Streamlined ad placement: discuss pricing and details with ad hosts and place orders conveniently.</p>
          </div>
        </div>
      </div>
      <div class="bg-sky-100 py-20">
        <div class="block justify-center items-center justify-end max-w-screen-2xl px-8 mx-auto xl:px-5">
          <div class="block text-center items-center justify-center">
            <h1 class=" text-5xl font-bold">Testimonials and Anticipation</h1>
            <p class="text-lg font-normal mt-4 text-gray-500">See what marketers, publishers, influencers and business owners have said</p>
          </div>
          <div class=" text-center">
            <p class="text-xl font-medium mt-10 max-w-3xl mx-auto">“Admrt is the platform I go to on almost a daily basis for 2nd words and ads shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Admrt!”</p>
            <h3 class=" text-lg font-normal mt-10">Mira Culos, <span class="text-gray-400">Renter</span></h3>
          </div>
          <div class="flex justify-center mt-10">
            <div class="flex mb-10 gap-5">
              <img src={per1} alt="" />
              <img src={per2} alt="" />
              <img src={per3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
 <Footer/>

      </div>
    </div>
  )
}

export default Header
