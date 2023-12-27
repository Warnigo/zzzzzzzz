import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import Checkbox from '@mui/material/Checkbox';
import SlideShow from '../SlideShow';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CreateAnAcc = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleConfimAuth = async (e) => {
    e.preventDefault();

    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !phoneNumber.trim() || !password.trim() || !country.trim()) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage('');
      navigate("/profile")
    } catch (err) {
      console.error(err);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-container min-h-screen md:flex ">
      <div className="md:w-1/2">
        <SlideShow />
      </div>
      <div class="w-full px-2 md:flex justify-center items-center ">
        <div class="w-full sm:w-full p-2 md:w-auto p-2 xl:w-3/5 lg:p-2">
          <div>
            <div>
              <h1 class="justify-center mb-2 font-normal text-3xl lg:text-5xl sm:text-3xl">Create An Account</h1>
              <p class="mt-2 text-base font-light md:mt-12">Already have an account?<span class="text-purple-700 font-normal cursor-pointer "><Link to="/login"> Login </Link></span></p>
            </div>
          </div>
          <form onSubmit={handleConfimAuth}>
            <div>
              <label class="block mt-8">
                <h3 class="text-lg font-normal">Full Name</h3>
                <input type="text" name="text" class="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" placeholder="Pristia Misbash" onChange={(e) => setFullName(e.target.value)} />
              </label>
            </div>
            <div>
              <label class="block mt-8">
                <h3 class="text-lg font-normal">Email Address</h3>
                <input type="email" name="email" class="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" placeholder="pristia@gmail.com|" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div>
              <label class="block mt-8">
                <h3 class="text-lg font-normal">Phone Number</h3>
                <input type="tel" name="tel" class="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" placeholder="Input Area" onChange={(e) => setPhoneNumber(e.target.value)} />
              </label>
            </div>
            <div>
              <label class="password-container block mt-8">
                <h3 class="text-lg font-normal">Password</h3>
                <div className='flex'>
                  <input
                    className="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1"
                    type={type}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <span class="flex justify-around items-center" onClick={handleToggle}>
                    <Icon class="absolute mr-14 mt-2" icon={icon} size={20} />
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label for="countries" class="password-container block mt-8">
                <h3 class="text-lg font-light md:font-normal">Country</h3>
              </label>
              <select id="countries" class="mt-2.5 px-3  py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" onChange={(e) => setCountry(e.target.value)}>
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div class="flex justify-center items-center mt-8">
              <div className='flex'>
                <Checkbox {...label} defaultChecked />
                <div className='flex justify-center items-center' >
                  <p className='text-sm'>By clicking Create account, I agree that I have read and accepted the <span class="text-blue-600">Terms of Use</span> and <span class="text-blue-600">Privacy Policy.</span> </p>
                </div>
              </div>
            </div>
            <p className="error-message">{errorMessage}</p>
            <div class="mt-16 social-card bg-blue-500 text-white google border rounded-xl  py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
              <button type='submit' class=" text-center   text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
                <span class="ml-1 md:ml-2 text-white">Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAcc;
