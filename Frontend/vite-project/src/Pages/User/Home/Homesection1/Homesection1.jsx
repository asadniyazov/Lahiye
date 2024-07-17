import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./Homesection1.scss"



function Homesection1() {
    
  return (
   <>



<Swiper    slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='Homesection1_img' src="https://th.bing.com/th/id/OIP.5LlC6sS_mC5Tft1k13SiqAHaLH?w=124&h=186&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src="https://th.bing.com/th/id/OIP.kaO4gDee1l9XXKxwZ4c1tAHaLE?w=121&h=181&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img className='Homesection1_img' src="https://th.bing.com/th/id/OIP.7nLOKj3byadAzzwptJeoAwHaLH?w=198&h=297&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src="https://th.bing.com/th/id/OIP.9paQpuj5m2k1gioluTkeFQHaHj?rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src="https://th.bing.com/th/id/R.15efb377ba5dee52a7c1d05ab80dbc51?rik=6A0yhxCGb86f3A&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src= "https://th.bing.com/th/id/OIP.zYT4AaV5DXzlWWaZni2EjwHaLH?w=198&h=297&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src="https://th.bing.com/th/id/OIP.4n7nGuAgq53zJKva4ppibQHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='Homesection1_img'src="https://th.bing.com/th/id/OIP.JE92hVAR4LBi0fRVf9Z1PwHaKV?w=115&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide> */}
      </Swiper>

   </>
  )
}

export default Homesection1