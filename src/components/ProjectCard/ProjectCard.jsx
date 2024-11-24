import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';
import productImg04 from "../../assets/—Pngtree—living-room-interior-blurred-home_15461580-scaled.jpg";

const ProjectCard = ({ imgUrl, title, link }) => {
    const navigate = useNavigate(); 

    return (
        <div className={`${styles.project__card}`}>
            <img src={productImg04} alt="Project" className={`${styles.project__image}`} />
            <div className={styles.project__card__body}>
                <h2>{title}</h2>
                <button 
                    className="btn" 
                    onClick={() => navigate(`/Services/${link}`)} 
                >
                    <span>See More</span>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
