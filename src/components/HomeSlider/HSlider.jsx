"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import Image from 'next/image';


// import required modules


function HSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg" width={1260} height={750}></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg" width={1260} height={750}></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/4240606/pexels-photo-4240606.jpeg" width={1260} height={750}></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/968880/pexels-photo-968880.jpeg" width={1260} height={750}></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg" width={1260} height={750}></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image alt="image1" src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1" width={1260} height={750}></Image>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
}

export default HSlider