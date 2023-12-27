import React, { useEffect } from "react";
import Datepicker from 'flowbite-datepicker/Datepicker';

const DatePickerPage = () => {
  useEffect(() => {
    const datepickerEl = document?.getElementById("datepickerId");
    new Datepicker(datepickerEl, {});
  }, []);
  return (
    <div className="relative flex justify-between">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66602 1.66675V4.16675" stroke="#2B59FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 1.66675V4.16675" stroke="#2B59FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.91602 7.57495H17.0827" stroke="#2B59FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z" stroke="#2B59FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0781 11.4167H13.0856" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0781 13.9167H13.0856" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99607 11.4167H10.0036" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99607 13.9167H10.0036" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.91209 11.4167H6.91957" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.91209 13.9167H6.91957" stroke="#2B59FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <input
        datepicker
        type="text"
        className="bg-gray-50 border border-gray-300  py-3 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date"
        // />
        // {/* <input */}
        onChange={(e) => console.log(e)}
        id="datepickerId"
        // type="text"
        iframeHeight={400}
        initDatepicker={true}
        // className="relative top-0 left-0"
        // placeholder="Select date"
        inline-datepicker
        datepicker-format="MM-dd-yyyy"
        datepicker-orientation="bottom left"
      />
    </div>
  );
};

export default DatePickerPage;
