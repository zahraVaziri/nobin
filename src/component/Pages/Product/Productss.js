import React from "react";
import { Card } from "react-bootstrap";

import './Productss.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import Head from "../Head/Head";



SwiperCore.use([Autoplay,Pagination,Navigation]);

const Productss =() => {
  return (
    <div >
      <Head/>
         <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex mb-3 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-tolid'}> محصولات </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
                
            </div>
            <div className={'row product-item'}>
                <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
  
       <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={'col-sm-3 '}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>
      <div className={' col-md-3'}>
    <a href="#">
  <Card >
  <Card.Img variant="top" src="	https://nobin.tv/wp-content/uploads/2019/07/photo_2020-09-22_12-16-37.jpg" />
  <Card.ImgOverlay >
      <div className={'icon-link'}>
    <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    </Card.ImgOverlay>
  
</Card>  
<h5 className={'caption'}>aaaa</h5>
  </a>
  </div>

 </div>
        </div>
         <div className={'container my-5 '}>
            <div className={'row '} >
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
    </div>
  );
}

export default Productss;
