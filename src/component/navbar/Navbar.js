import { Grid, Hidden, IconButton, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { toggleDrawer, useLayoutDispatch } from '../context/LayoutContext';
import {SwiperSlide, Swiper}  from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import {HashLink } from 'react-router-hash-link';
import { Carousel, Form, FormControl } from "react-bootstrap";
import MenuDrawer from "../drawer/MenuDrawer";

SwiperCore.use([Autoplay,Pagination,Navigation]);


const Navbar = () => {

  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
  const LayoutDispatch = useLayoutDispatch();

  return (
    <div style={{position:'relative'}}>
      <div className={'bg-navbar me-2 my-md-3 mt-0'} >
        <div className={"container"}>
          <Grid container spacing={1} style={{justifyContent:'space-between'}} className={'py-3'}>
            <Grid item sm={12} md={9}  >
              <div  className={'text-end-nav '} >

                <Link  to="/" className={'header-brand'}>
                    <img src={'/images/logo.png'} alt={'23'} />
                </Link>
                    
                {isTabletSize && <IconButton onClick={() => toggleDrawer(LayoutDispatch)}><i className="fa fa-bars text-dark text-right" style={{outline:'unset',color:'black'}} aria-hidden="true"></i></IconButton>}
                    
                { isTabletSize ? <MenuDrawer/> :
                  <ul className={'ul-nav-homepage'} >
                    <li>
                      <HashLink smooth to="/">
                          صفحه اصلی
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/news">
                          اخبار
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/Productss">
                        محصولات 
                      </HashLink>
                    </li>
                      
                    <li>
                      <Link  to="/about">
                          درباره ما
                      </Link>
                    </li>
      
                  </ul>
                }
              </div>
            </Grid>
            <Hidden mdDown>
              <Grid item  md={3}  className={'grid-left-nav'}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="جستجو ..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <i class="fa fa-search" aria-hidden="true"></i>
                </Form>
                <a href="https://instagram.com/asma.mppa/" title="تلگرام" className="social-header">
                  <i class="fab fa-instagram"></i>
                </a>       
              </Grid> 
            </Hidden>
                
          </Grid>
        </div>
      </div>
      <div>
        <Carousel className="carousel">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="/images/slider1.jpg"
              alt="First slide"
            />
      
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="/images/slider2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="swiper-header">
        <div className={'container'}>
          <Swiper navigation={true} slidesPerView={1} spaceBetween={5} 
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
              }} breakpoints={{
                "500": {
                  "slidesPerView": 2,
                  "spaceBetween": 5
                },
                "640": {
                  "slidesPerView": 3,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 3,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 5,
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
                  <img src={'https://nobin.tv/wp-content/uploads/2021/07/%D8%AE%D8%A7%D9%86%D9%87-%D9%85%D8%A7.png'}/>
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

export default Navbar;
