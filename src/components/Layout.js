import React, { Component } from 'react'
import './Layout.css';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Buttom from './Buttom';
import { Outlet } from "react-router-dom";



export default class Layout extends Component {
  render() {
    return (
        <>
        <TopNav />
        <div className='row'>
          <div className='col-3'>
        <SideNav />
          </div>
          <div className='col-9 text-center'>
            <Outlet />
          </div>
        </div>
        <Buttom/>
      </>
    )
  }
}
