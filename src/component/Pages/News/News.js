import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import './News.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import Head from "../Head/Head";



SwiperCore.use([Autoplay,Pagination,Navigation]);

const News =() => {
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
            <div className={'row news-item'}>
                <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
  
       <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={'col-md-4 '}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
      <div className={' col-md-4'}>
    <Card className={'card-news'} >
  <Card.Img variant="top" className="img-news" src="https://nobin.tv/wp-content/uploads/2021/06/800x450-1.jpg" />
 
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        <p>10 مرداد 1400</p>
        <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Title><h4 class="line2-ell "><span class="ellip">آغاز تصویربرداری مسابقه <span class="ellip-line">تلویزیونی «کارویا» / آشنایی با دانش بنیان‌هایی که می‌توانند اقتصاد را متحول کنند </span></span></h4></Card.Title>
    <Card.Text>
      <div class="line3-ell my-3"><span class="ellip">تصویربرداری مسابقه تلویزیونی «کارویا» با هدف شناسایی و معرفی شرکت‌های <span class="ellip-line">برتر حوزه دانش بنیان آغاز شد. به گزارش روابط عمومی استودیو نوبین، این مسابقه با محوریت ارائه‌های آسانسوری (بسیار کوتاه)… </span></span></div>
    </Card.Text>
  </Card.Body>
  <Card.Body className={'link-more'}>
    <Card.Link  href="#">
       بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Card.Link>
    
  </Card.Body>
</Card>
  </div>
 <div class="pagination-container pagination-container--align-center p-3">
  <ul class="pagination">
    <li>
      <a class="mdc-icon-button mdc-icon-button--disabled">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
      </a>
    </li>
    <li aria-current="page">
      <a class="mdc-icon-button mdc-icon-button--active">
        <span class="mdc-icon-button__icon">1</span>
      </a>
    </li>
    <li>
      <a class="mdc-icon-button" href="#">
        <span class="mdc-icon-button__icon">2</span>
      </a>
    </li>
    <li>
      <a class="mdc-icon-button" href="#">
        <span class="mdc-icon-button__icon">3</span>
      </a>
    </li>
  
    <li>
      <a class="mdc-icon-button" href="#">
        <span class="mdc-icon-button__icon">4</span>
      </a>
    </li>
   
    <li>
      <a class="mdc-icon-button" href="#">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
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
  "990": {
    "slidesPerView": 6,
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

export default News;
