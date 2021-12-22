import ProductLast from "./ProductLast";
import React, {useEffect, useState} from "react";
import {SwiperSlide, Swiper}  from 'swiper/react';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export const ProductListLast = (props) => {
    
    const [amir1,setAmir1]=useState(false)
    useEffect(()=>{
        setAmir1(true)
    })
    return(
        <>
         <Swiper navigation={true} slidesPerView={1} spaceBetween={5} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        
                        }} breakpoints={{
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 30
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 40
                        }
                        }} className="mySwiper py-3">
            {props.productlast.map((item)=> (
               <SwiperSlide className='py-2'>
                   {
                       amir1 ? <ProductLast data={item} /> : ''
                   }
               </SwiperSlide>
                )
               
            )} 
         </Swiper>
        </>
    )
    
}
