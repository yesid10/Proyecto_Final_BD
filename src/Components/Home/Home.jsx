import React from 'react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <Swiper className='w-[80%]' autoplay={{delay: 2500, disableOnInteraction:false}} navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className='h-screen w-screen bg-[url(https://digital-world-4.myshopify.com/cdn/shop/files/slideshow2-home4_1920x.jpg?v=1613501343)]'>
            <div>
              <span>Mejor vendido</span>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-screen w-screen bg-no-repeat bg-[url(https://digital-world-4.myshopify.com/cdn/shop/files/slideshow1-img-home4_600x.png?v=1613156855)]'>
            <div>
              <span>Nuevos productos</span>
              <h1>La mejor <span>laptop</span> del año</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae neque, porro non velit modi accusantium sint ducimus, error debitis perferendis! At temporibus cum sapiente dolorum iure veniam recusandae fugiat.</p>
              <button className='bg-secondary_color text-white px-4 py-1 '>Comprar ahora</button>
            </div>
          </div>

        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Home