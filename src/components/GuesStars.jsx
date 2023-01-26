import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const GuestStars = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-[#080E1C]">
      <h1 className="text-4xl font-bold">Guest Stars</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full">
        {[...Array(10)].map((_, i) => {
          return (
            <SwiperSlide className="h-full flex flex-col gap-2">
              <img
                src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-full rounded-md"
              />
              <h1>Name</h1>
              <div className="bg-red-400 rounded-md p-2 w-20 text-center">
                Vtuber
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="rounded-full p-2 bg-neutral-500 h-16 w-24">
        View all
      </button>
    </div>
  );
};

export default GuestStars;
