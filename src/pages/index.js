import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Brand from '@/components/Brand';
import Footer from '@/components/Footer';
import GuestStars from '@/components/GuesStars';
import Inside from '@/components/Inside';
import Menu from '@/components/Menu';
import Nav from '@/components/Nav';
import Pillars from '@/components/Pillars';
import Rundown from '@/components/Rundown';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloatOpen, setIsFloatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-white bg-black font-sans">
      <Nav />
      <div className="flex flex-col justify-center gap-10 items-center pt-72 h-screen bg-[#080E1C] rounded-br-[200px]">
        <h1 className="text-center text-6xl xl:text-7xl font-bold">
          Bringing the Best <br /> Pop Culture <br /> Experience
        </h1>
        <h2 className="text-center text-sm md:text-lg">
          Indonesia Comic Con is a platform to celebrate your love for comics &
          pop <br /> culture art forms by creating experiences that are
          original, exciting, and <br /> memorable, to{' '}
          <span className="font-bold italic">#UnleashTheTrueYou</span>.
        </h2>
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold">Oct 1-2, 2022</h1>
          <h2 className="text-center">Jakarta Convention Center</h2>
        </div>
        <button className="bg-[#F60094] p-7 rounded-md h-20 md:h-2/3">
          Get Your Ticket
        </button>
        <div className="relative right-[42%] bottom-36 hidden md:flex gap-5 flex-col">
          <div class="flex flex-col justify-center items-center border border-neutral-600 gap-6 bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <img
              src="https://img.icons8.com/ios/100/FFFFFF/instagram-new--v1.png"
              className="w-8 h-8"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/90/FFFFFF/facebook-f.png"
              className="w-8 h-8"
            />
            <img
              src="https://img.icons8.com/material-rounded/96/FFFFFF/twitter.png"
              className="w-8 h-8"
            />
            <img
              src="https://img.icons8.com/sf-black-filled/128/FFFFFF/youtube-play.png"
              className="w-8 h-8"
            />
          </div>
          <div className="rounded-full w-20 h-20 bg-[#12BA82] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
        </div>
        <div class="fixed p-4 right-20 text-center bottom-20 rounded-full w-24 h-24 hidden md:flex justify-center items-center z-50 bg-[#F60094]">
          Chat us!
        </div>
        <button
          class="fixed bg-neutral-500 p-4 right-8 bottom-8 rounded-full w-24 h-24 z-50 md:hidden block"
          onClick={() => setIsFloatOpen(true)}>
          s
        </button>
        <Menu onClose={() => setIsFloatOpen(!isFloatOpen)} isOpen={isFloatOpen}>
          <h1>Become an Exhibitor</h1>
          <h1>Promote Your Brand</h1>
          <h1>FAQ</h1>
          <h1>Event Guidelines</h1>
          <h1>Safety and Weapon Policy</h1>
          <h1>Snti-Harassment Policy</h1>
        </Menu>
      </div>
      <GuestStars />
      <Rundown />
      <div class="hidden md:flex w-full h-[700px] p-4 py-40 justify-center items-center gap-4 bg-[#080E1C]">
        <img
          src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="h-full rounded-md md:w-1/2 lg:w-1/3"
        />
        <img
          src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="h-full rounded-md md:w-1/2 lg:w-1/3"
        />
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-[500px] py-40 flex md:hidden justify-center items-center p-4 bg-[#080E1C]">
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="h-5/6 rounded-md w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="h-5/6 rounded-md w-full"
          />
        </SwiperSlide>
      </Swiper>
      <Pillars />
      <div className="flex flex-col justify-center items-center gap-10 pt-20 h-auto bg-[#080E1C]">
        <Inside />
        <Brand />
        <div class="flex flex-col justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1605663864774-748f5f858a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="party"
            className="rounded-xl w-4/5 md:w-full"
          />
          <h1 className="text-2xl lg:text-5xl xl:text-7xl font-bold md:bottom-20 md:left-10 relative text-center">
            See you <br /> at the party!
          </h1>
          <h1 className="text-2xl lg:text-5xl font-bold">October</h1>
          <h2 className="text-xl">10 AM - 8 PM</h2>
          <h1 className="text-2xl lg:text-5xl font-bold text-center">
            Jakarta Convention Center
          </h1>
        </div>
        <div class="flex flex-col min-h-screen bg-white w-full">s</div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
