import React from 'react'
import { assets } from '../Assets/assets'


const currentYear = new Date().getFullYear()


function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            repellat?
          </p>
        </div>
        <div>
          <p className="textxl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+2348104275943</li>
            <li>Uchennajoeleze@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          © {currentYear} FashionMarket. All rights reserved. || Developed by
          Uchenna Joel Eze ||
          <a href="#">Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default Footer