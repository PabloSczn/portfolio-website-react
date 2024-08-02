import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import testimonials from './data';
import Testimonial from './Testimonial';
import './testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section id="testimonials">
      <h2 data-aos="fade-in">References</h2>
      <div className="container" data-aos="fade-in">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;