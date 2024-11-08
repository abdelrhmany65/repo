import React from 'react';
import mail from '../../assets/material-symbols-light_mail-outline.png';
import phoneoutline from '../../assets/material-symbols-phoneoutline.png';
import loction from '../../assets/Group.png';
import insta from '../../assets/Group 107.png';
import face from '../../assets/Group 108.png';
import linked from '../../assets/iconfinder-social-media-applications-14linkedin-4102586_113786 (1).png';
import styles from './header.module.css';

const TopHeader = () => {
  return (
    <div className='py-2'>
      <div className="container">
        <div className="content-topheader d-flex justify-content-between align-items-center my-3">
          <div className="left d-flex justify-content-between align-items-center">
            {/* البريد الإلكتروني */}
            <div className='me-3 content-left'>
              <img src={mail} alt="mail" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>

            {/* الهاتف */}
            <div className='me-3'>
              <img src={phoneoutline} alt="phone" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>

            {/* الموقع */}
            <div>
              <img src={loction} alt="location" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>
          </div>

          {/* الأيقونات الاجتماعية */}
          <div className="right">
            <div className={`icons-right ${styles.socialIcons}`}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={face} alt="facebook" className={styles.rightBox} />
              </a>

              <a href="https://www.linkedin.com/company/fuzik/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={linked} alt="linkedin" className={styles.rightBox} />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={insta} alt="instagram" className={styles.rightBox} />
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
