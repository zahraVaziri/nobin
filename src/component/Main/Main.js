import React from "react";
import './Main.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { Card,Button, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import { ProductServise } from "../Pages/singlePages/output/ProductServise";
import ProductList from '../Pages/singlePages/output/ProductList';
import Navbar from "../navbar/Navbar";
import {ProductListLast} from "../Pages/singlePages/output/ProductListLast";


SwiperCore.use([Autoplay,Pagination,Navigation]);
const Main =() => {
  const products = ProductServise.getProducts()
  const productslast = ProductServise.getProductsLast()
  return (
    <div>
      <Navbar/>
        <div className={'container '}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex mb-3 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-tolid'}> تولیدات </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
                
            </div>
                <ProductList products={products}/>
        </div>
        <div className="section2 ">
             <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex my-5 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-mahsol'}> معرفی استودیو نوبین </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
                
            </div>
            <Row className={'mb-5'}>
                <Col sm={6}>
                <p class="pe-0 pe-lg-5 paraghraph-section2">
                    تلویزیون، همان جعبه جادویی که حالا بیشتر شبیه صفحه ای از کاغذ روز به روز، رو به نازکی می رود به عنوان رسانه ای تاثیرگذار و محبوب میان مردم دنیا زنده است. این مخاطبین هستند که با همراهی و حیات بخشی به تلویزیون، ریلیتی شو یا برنامه های زنده تلویزیونی را پرمخاطب تر کرده اند.<br/>
                    نوبین، پنجره ای ست برای تماشای مستند مسابقه، برنامه های تلویزیونی واقع نما و… از طریق چشم های شما.<br/>
                    تولد استودیو نوبین به سال 1389 و زمان ساخت اولین سری مستند مسابقه فرمانده برمی گردد و بعد از آن با تولید مجموعه های خانه ما، ضدگلوله، خونه به خونه، کارساز و بریم بسازیم و… جذابیت و هیجان را از طریق دیدن به بینندگان خود منتقل کرد.<br/>
                    مسیری که پیش گرفته ایم روشن است، روشن به درخشش چشم های شما.
                </p>
                </Col>
                <Col sm={6}>
                    <div>
                        <iframe src="https://www.aparat.com/video/video/embed/videohash/srYKZ/vt/frame" style={{borderRadius:'1rem'}} width={'100%'} height={'247px'} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
         <div className="section3 ">
             <div className={'container mb-5'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex my-5 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-tolid'}> معرفی استودیو نوبین </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
              <div>
                 <ProductListLast productslast={productslast}/>
              </div>
            </div>
            </div>
            </div>
             <div className="section2 ">
             <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex my-5 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-mahsol'}> معرفی استودیو نوبین </h3>
                        <div className={'divider1'}>

                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            </div>
             <div className={'container my-5 '}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'d-flex mb-3 main-first-title'}>
                        <div className={'divider1'}>
                            
                        </div>
                        <h3 className={'title-tolid'}> تولیدات </h3>
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

export default Main;
