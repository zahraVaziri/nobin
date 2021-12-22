import React from "react";
import { Col } from "react-bootstrap";
import './Footer.css'
import NeshanMap from 'react-neshan-map-leaflet'
const Footer =() => {
  return (
    <div >
       <div className={'footer'}>
            <div className={'container mt-5'}>
                <div class="row pt-3">
                    <div class="col-12 text-center text-lg-start nobin-footer-logo py-4">
                        <a href="https://nobin.tv" title="استودیو نوبین">
                            <img src="https://nobin.tv/wp-content/themes/nobin-v2/img/logo-f.png" alt="استودیو نوبین"/>
                        </a>
                    </div>
 <Col md={4} class="col-lg-4 offset-lg-2 text-center text-lg-start about-footer d-flex flex-column justify-content-between pb-2">                        <p>نوبین، اولین رسانه تخصصی ریلیتی شو در ایرانبا نوبین، نو ببین!</p>
                        <p>
                        <div className={'social-icon'}>
                            <i class="fab fa-instagram"></i>
                        </div>
                        </p>
                    </Col>
                    <Col md={2}>
                        </Col>
                    <Col md={4} class="col-lg-4 offset-lg-2 text-center text-lg-start about-footer d-flex flex-column justify-content-between pb-2">
                        <div >
                    <p>
                        تهران – خیابان ولی عصر – بالاتر از پارک ساعی – جنب بیمارستان مهرگان – بن بست مهرگان – پلاک 3 - کد پستی: 1516735614                    </p>
                    <p>تلفن: 88782260</p>
                    <p class="mb-lg-0">
                        info@nobin.tv
                    </p>
                </div>
                    </Col>
                      <Col md={2} >
                           <div className={'parent-map pb-2'}>
                            <NeshanMap 
                            
    options={{
        key: 'web.TafZx16ejCNrvu5mpTwjoSUUBIayjVBSHPM3jHI9',
        maptype: 'dreamy',
        poi: true,
        traffic: false,
        center: [35.71193909941763, 51.39858728530353],
        zoom: 16
    }}
    style={{
        width: "100%",
        height: "175px",
        margin: 0,
        padding: 0,
        background: "#eee"
      }}
    
    onInit={(L, myMap) => {
        let marker = L.marker([35.71193909941763, 51.39858728530353])
        .addTo(myMap)
        .bindPopup('I am a popup.');

        myMap.on('click', function (e) {
        marker.setLatLng(e.latlng)
        });

    }}
    />
</div>
                    </Col>
                </div>
            </div>
       </div>
       <div className="footer-end">
        <h6>
            کلیه حقوق این سایت، متعلق به استودیو نوبین است
        </h6>
       </div>
    </div>
);}

export default Footer;
