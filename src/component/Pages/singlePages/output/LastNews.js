import React from "react";
import HeadSingle from "../HeadSingle";
import './LastNews.js';

import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ProductServise } from "./ProductServise";


SwiperCore.use([Autoplay,Pagination,Navigation]);
const LastNews =() => {
 

   const {id} =useParams

    const data = ProductServise.getProductsByIdLast(id);

    const News = data.news;
  return (
    <div >
        <div className={'bg-single-head me-2  mt-0'} style={{backgroundImage:`url(${data.pic})`}} ></div>
        <HeadSingle/>
        <div className='container'>
            <div className="row">
                <div className="col-lg-9">
                    <Card className={'card-news-single'} >
                        <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
                        
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <p>{data.date}</p>
                                <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
                            </ListGroupItem>
                            
                        </ListGroup>
                        <Card.Body>
                            <Card.Title><h4 class="line2-ell ">{data.title}</h4></Card.Title>
                            <Card.Text>
                            <div class="line3-ell text-last-news my-3">{data.text1}
                            {data.text2}
                            {data.text3}
                            {data.text4}
                            </div>
                            </Card.Text>
                        </Card.Body>
                        
                        </Card>
                        <div className="my-3">
                            <div className="title-form">
                                <i class="fas fa-comment icon-coment"></i>
                                <span className="nmb-coment">0</span>
                                <h5 className="text-form"> نظرات کاربران</h5> 
                            </div>
                           
                            <form class="row g-3 form-news">
                                <h6 className="pb-1 mt-3">ثبت نظرات :</h6>
                            <div class="col-md-6">
                                
                                 <input type="text" class="form-control mb-3" placeholder="نام " id="inputPassword4"/>
                                <input type="email" class="form-control" placeholder="ایمیل " id="inputEmail4"/>
                                 
                               
                            </div>
                            <div class="col-md-6">
                                 <textarea class="form-control" id="validationTextarea" placeholder="متن پیام" rows={3} required></textarea>
                               
                            </div>
                            </form>
                            
                        </div>
                </div>
                <div className="col-lg-3 order-last order-lg-first mb-2">
                   <div className="right-col">
                        <div >
                            <div className="bg-news-slide">
                                <i class="fas fa-mouse-pointer"></i> 
                                <h5>اخبار بریم بسازیم</h5>
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
                        <h5 className="m-0">
                            راه ارتباطی
                        </h5>
                    </div>
                    <div className="text-center py-2">
                        <a>
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                        <a>
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                        <a>
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                    <div className="d-flex  align-items-center py-2">
                          <i class="fas fa-map-marker-alt p-2"></i>
                        <h5 className="m-0">
                            https://berimbesazim.ir
                        </h5>
                    </div>
                </div>
                    </div>
                    
                </div>
              
            </div>

        </div>
        <div className="container my-4">
             <div className={'col-12'}>
                    <div className={'d-flex mb-3 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-tolid'}> همراهان استودیو نوبین </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
         <Swiper navigation={true} slidesPerView={1} spaceBetween={15} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
}} breakpoints={{

  "290": {
    "slidesPerView": 3,
    "spaceBetween": 20
  },
  "640": {
    "slidesPerView": 3,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 5,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 8,
    "spaceBetween": 60
  }
}} className="mySwiper">
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2021/07/%DA%A9%D8%A7%D8%B1%D8%B3%D8%A7%D8%B2-2.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'	https://nobin.tv/wp-content/uploads/2020/10/%D8%B6%D8%AF%DA%AF%D9%84%D9%88%D9%84%D9%87.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2021/08/png-karoya.jpg'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2021/07/%D8%AE%D8%A7%D9%86%D9%87-%D9%85%D8%A7.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2021/08/png-karoya.jpg'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2020/10/%D9%81%D8%B1%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%B2.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2020/10/%D9%81%D8%B1%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%B2.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2020/10/%D9%81%D8%B1%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%B2.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2020/10/%D9%81%D8%B1%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%B2.png'}/>
    </a>
  </SwiperSlide>
  <SwiperSlide>
    <a>
        <img src={'https://nobin.tv/wp-content/uploads/2020/10/%D9%81%D8%B1%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%B2.png'}/>
    </a>
  </SwiperSlide>
  </Swiper>
    
       </div>
    </div>
  );
}

export default LastNews;
