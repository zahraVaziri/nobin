
import { Grid, Hidden, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { toggleDrawer, useLayoutDispatch } from "../../context/LayoutContext";
import MenuDrawer from "../../drawer/MenuDrawer";
import './Head.css'

const Head =() => {

    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
    const LayoutDispatch = useLayoutDispatch();

  return (
    <div style={{position:'relative'}}>
         <div className={'bg-head me-2 my-md-3 mt-0'} >
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
    </div>
  );
}

export default Head;
