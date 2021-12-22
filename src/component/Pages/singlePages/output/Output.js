import React from "react";
import HeadSingle from "../HeadSingle";
import './Output.css'
import { useParams } from "react-router";
import { ProductServise } from "./ProductServise";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import 'swiper/swiper.min.css';
SwiperCore.use([Autoplay,Pagination,Navigation]);
const Output =() => {

    const {id} =useParams()

    const data = ProductServise.getProductsById(id);
    
    const News = data.news;
  return (
    <div >
        <div className={'bg-single-head me-2  mt-0'} style={{backgroundImage:`url(${data.pic})`}} ></div>
        <HeadSingle/>
        <div className='container'>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-md-0 mb-3 order-last order-md-first img-card-slider">
                            <img src={data.pic} width={'100%'}/>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-6 order-first order-md-last">
                            <div className={'col-12'}>
                                <div className={'d-flex mb-3 main-first-title'}>
                        
                                    <h3 className={'title-tolid title-single'}>{data.title}</h3>
                                    <div className={'divider1'}>

                                    </div>
                                </div>
                            </div>
                            <div className="text-org mb-5">
                                <p>
                                    {data.text1}
                                    <br/>
                                    <br/>
                                     {data.text2}
                                    <br/>
                                    <br/>
                                     {data.text3}
                                    <br/>
                                    <br/>
                                     {data.text4}
                                    <br/>
                                </p>
                               
                            </div>
                           
                        </div> 
                       
                    </div> 
                    <div className="row row-filimo mb-3">
                        <div className="col-md-4 col-sm-6 col-12">
                             <div >
                            <div className="bg-filimo-slide">
                                <div>
                               <span>{data.iconFilimo}</span>
                               </div>
                               <div>
                                 {data.filimo} 
                                </div>
                            </div> 
                        </div>
                        </div>
                    </div> 
                    <div className="parant-iframe">
                        <div className="py-3 px-5">
                            <div className={'col-12'}>
                        <div className={'d-flex my-4 main-first-title'}>
                
                            <h3 className={'title-tolid title-single text-light'}> تیزر {data.title} </h3>
                            <div className={'divider1'}>

                            </div>
                        </div>

                    </div >
                            <iframe className="mb-5" src={data.video} style={{borderRadius:'1rem'}} width={'100%'} height={'247px'} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        </div>
                    </div>
                    
                    <div className={'col-12'}>
                        <div className={'d-flex my-4 main-first-title'}>
                
                            <h3 className={'title-tolid title-single'}> تصاویر </h3>
                            <div className={'divider1'}>

                            </div>
                        </div>

                    </div>
                    <Swiper navigation={true} slidesPerView={1} spaceBetween={5} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} breakpoints={{

                        "290": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 30
                        }
                    }} className="mySwiper">
                        <SwiperSlide>
                            <a href="#">
                                <img src={data.pic1}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                           <a href="#">
                                <img src={data.pic2}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                           <a href="#">
                               <img src={data.pic3}/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                           <a href="#">
                                <img src={data.pic4}/>
                            </a>
                        </SwiperSlide>
                        
                        
                    </Swiper>
                </div>
                <div className="col-lg-3 order-last order-lg-first mb-2">
                   <div className="right-col">
                        <div >
                            <div className="bg-news-slide">
                                <i class="fas fa-mouse-pointer"></i> 
                                <h6 >اخبار {data.title} </h6>
                            </div> 
                        </div>

                        
                         
                               
                                {News.map((item)=> (
                                <div className="card-right-slide">
                                       <div class="card  my-3" >
                                    <div class="row g-0 my-3 ">
                                        <div class="col-md-4">
                                            <img src={item.newsPic} class="img-fluid  img-right-slide"  alt="..."/>
                                        </div>
                                        <div class="col-md-8 texts-col">
            
                                            <h5 class="card-title card-h5">{item.newsTitle} </h5>
                                            <p class="card-text card-p">{item.newsText} </p>
                                        </div>
                                    </div>   
                                </div>
                                </div>
                                    )
                                
                                )}
                                
                                    
                            
                        
                        <div className="divder">

                        </div>
                          <div className="content-way my-5">
                    <div className="d-flex  align-items-center py-2">
                        <i class="fas fa-share-alt p-2"></i>
                        <h5 style={{fontSize:'1rem'}} className="m-0">
                            راه ارتباطی
                        </h5>
                    </div>
                    <div className="contact-icon text-center py-2">
                           <a>
                          {data.conecticon1}
                        </a>
                        <a>
                          {data.conecticon2}
                        </a>
                        <a>
                          {data.conecticon3}
                        </a>
                    </div>
                    <div className="d-flex  align-items-center py-2">
                          <i class="fas fa-map-marker-alt p-2"></i>
                        <p style={{fontSize:'1rem'}} className="m-0">
                           {data.link}
                        </p>
                    </div>
                </div>
                    </div>
                    
                </div>
              
            </div>

        </div>
        <div className="container">
        <div className="row mb-3">
            <div className="col-12">
                <a href="#"> 
                <div className="bg-instagram">
                    <div className="row">
                        <div className="col-lg-1 col-12 icon-insta-center">
                           {data.iconinsta}
                        </div>
                         <div className="col-lg-7 col-12">
                           {data.insta}
                        </div>
                         <div className="col-lg-4 col-12">
                         {data.btninsta}
                        </div>
                    </div>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Output;
