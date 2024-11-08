import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TopHeader from './TopHeader';
import styles from './header.module.css';
import log from "../../assets/SVG 06.svg";

const nav__link = [
  { path: '/', display: 'Home' },
  { path: 'about', display: 'About' },
  { path: 'Services', display: 'Services' },
  { path: 'Projects', display: 'Projects' },
  { path: 'ourteam', display: 'OurTeam' },
  { path: 'contactus', display: 'ContactUs' },
];

const Header = () => {
  return (
    <header className='my-1 fixed-top bg-black'>
      <TopHeader />
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo bg-light p-1">
                <img src={log} alt="logo" srcset="" className={styles.logo}/>
            </div>
          </Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
              {
                nav__link.map(({ path, display }) => (
                  <li key={path} className='nav__item px-1 fw-bold'>
                    <NavLink 
                      to={path} 
                      className={(navClass) => `${navClass.isActive ? 'nav__active' : ''} ${styles.textStyle}`}>
                      {display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="offcanvas offcanvas-end bg-black" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header mt-4">
          <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">logo</h5>
          <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
          {
            nav__link.map(({ path, display }) => (
              <li key={path} className='nav__item py-3 border-bottom fw-bold full-height'> 
                <NavLink 
                  to={path} 
                  className={(navClass) => `${navClass.isActive ? 'nav__active' : ''} ${styles.textStyle} ${styles.underline}`}>
                  {display}
                </NavLink>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
