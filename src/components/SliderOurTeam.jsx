import React from 'react';
import style from '../pages/main.module.css';
import Slider from 'react-slick';
import CommoSection from './ui/CommoSection';
import hero from "../assets/59cfcea786465c009ce38a85c6adab04.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOurTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust this to show 3 cards at once
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3, // Show 2 cards on tablets
              arrows: false
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2, // Show 1 card on smaller screens
              arrows: false // إخفاء الأسهم
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1, // Show 1 card on smaller screens
              arrows: false // إخفاء الأسهم
            },
          },
        ],
      };
    
      return (
        <>
          {/* Other Sections */}
    
          {/* Our Team Section */}
          <div>
            <CommoSection title="Our Team" />
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <Slider {...settings}>
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mt-4">
                    <div className="card border-0 me-4">
                      <img src={hero} className="card-img-top" alt="service image" />
                      <div className={style.cardBody}>
                        <p className="card-text">Some quick example</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mt-4">
                    <div className="card border-0 me-4">
                      <img src={hero} className="card-img-top" alt="service image" />
                      <div className={style.cardBody}>
                        <p className="card-text">Some quick example</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mt-4">
                    <div className="card border-0 me-4">
                      <img src={hero} className="card-img-top" alt="service image" />
                      <div className={style.cardBody}>
                        <p className="card-text">Some quick example</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mt-4">
                    <div className="card border-0 me-4">
                      <img src={hero} className="card-img-top" alt="service image" />
                      <div className={style.cardBody}>
                        <p className="card-text">Some quick example</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mt-4">
                    <div className="card border-0 me-4">
                      <img src={hero} className="card-img-top" alt="service image" />
                      <div className={style.cardBody}>
                        <p className="card-text">Some quick example</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
    
          {/* Other Sections */}
        </>
      );
    };

export default SliderOurTeam