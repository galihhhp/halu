import Menu from '@/components/Menu';
import { useState } from 'react';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex px-8 md:px-56 h-24 w-full gap-48 fixed items-center bg-[#151717] border-t-4 border-teal-600 z-50">
      <img
        className="h-full w-full object-contain"
        src="https://www.clipartmax.com/png/middle/273-2739828_indonesia-comic-con-logo.png"
        alt=""
      />
      <div class="hidden md:flex gap-3 w-full items-center">
        <button className="rounded-md text-sm bg-neutral-800 p-2 h-12 w-20">
          Home
        </button>
        <button className="rounded-md text-sm hover:bg-neutral-800 p-2 h-12 w-28">
          Guest Stars
        </button>
        <button className="rounded-md text-sm hover:bg-neutral-800 p-2 h-12 w-24">
          Brands
        </button>
        <button className="rounded-md text-sm hover:bg-neutral-800 p-2 h-12 w-24">
          Contact
        </button>
        <button
          className="rounded-md text-sm hover:bg-neutral-800 p-2 h-12 w-24"
          onClick={() => setIsOpen(true)}>
          More
        </button>
        <Menu onClose={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <h1>Become an Exhibitor</h1>
          <h1>Promote Your Brand</h1>
          <h1>FAQ</h1>
          <h1>Event Guidelines</h1>
          <h1>Safety and Weapon Policy</h1>
          <h1>Snti-Harassment Policy</h1>
        </Menu>
      </div>
      <button className="bg-[#F60094] w-2/3 md:w-1/4 rounded-md h-2/3 font-bold">
        Get Your Ticket
      </button>
    </nav>
  );
};

export default Nav;
