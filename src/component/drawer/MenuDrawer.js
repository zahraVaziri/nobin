import React from 'react';

import { toggleDrawer, useLayoutDispatch, useLayoutState } from '../context/LayoutContext';

import { HashLink } from 'react-router-hash-link';
import './MenuDrawer.css'
import { Drawer } from '@mui/material';
import { Form, FormControl } from 'react-bootstrap';
const MenuDrawer = () => {

  const { drawerOpen } = useLayoutState();
  const LayoutDispatch = useLayoutDispatch()

  return (
    <Drawer className={'drawer'} anchor={'right'} open={drawerOpen} onClose={() => { toggleDrawer(LayoutDispatch) }}>
      <ul className={'menu'} >
                    <li className={'menuItem'} >
                        <HashLink className={'menuLink'} smooth to="/">
                          صفحه اصلی
                        </HashLink>
                    </li>
                 
                    <li className={'menuItem'}>
                       <HashLink className={'menuLink'} smooth to="/news">
                          اخبار
                      </HashLink>
                    </li>
                     <li className={'menuItem'}>
                       <HashLink className={'menuLink'} smooth to="/Productss">
                        محصولات 
                      </HashLink>
                    </li>
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/about" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      درباره ما
                      </HashLink>
                    </li>
                   
                   
                  </ul>
    </Drawer>
  )
}
export default MenuDrawer