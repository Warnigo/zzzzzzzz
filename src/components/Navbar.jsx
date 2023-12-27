import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from '../images/Group 1000005596 (2).svg'
import search from '../Layout/AuthPage/images/search-normal.svg'
import userPhoto from '../Layout/AuthPage/images/Group 1000005937.svg'

function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div>
        <div class="relative w-full lg:w-72">
          <input class="p-3 w-full z-20 text-sm text-gray-900 bg-blue-50 rounded-full border outline-none focus:border-blue-500" placeholder="Search" required />
          <div class="absolute top-0 right-0 p-3 text-sm font-medium h-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            <img src={search} />
          </div>
        </div>
      </div>


      <Typography
        as="li"
        variant="small"
        className="p-1 text-black text-lg font-normal"
      >
        <a href="/about" className="flex items-center">
          <h1>About</h1>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-black text-lg font-normal"
      >
        <a href="/contact" className="flex items-center">
          <h1>Contact</h1>
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <div className="max-w-7xl mx-auto ">
        <Navbar className="sticky bg-transpernt border-none backdrop-none backdrop-blur-none shadow-none top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="/"
              className="mr-4 text-black cursor-pointer py-1.5 font-medium"
            >
              <img className="w-36 md:w-44" src={Logo} />
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className='cursor-pointer hidden lg:flex buttonSign'>
              <a href="/login">
                <div className='hover:bg-blue-100 signIndiv'>
                  <img src={userPhoto} />
                  <h1 className='text-center buttonSignIn'>Sign In</h1>
                </div>
                </a>
                <a href="/register">
                <div>
                  <button className='buttonSignUp  hover:bg-blue-100'>Sign Up</button>
                </div>
                </a>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
              <a href="/login"><span>Sign In</span></a>
              </Button>
              <Button fullWidth variant="" size="sm" className="bg-blue-700">
              <a href="/register"><span>Sign up</span></a>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}

export default StickyNavbar;