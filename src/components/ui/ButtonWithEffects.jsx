import React, { useRef } from "react";
import { gsap } from "gsap";
import styles from "./ui.module.css";

const ButtonWithEffects = ({ text }) => {
  const circlesTopLeftRef = useRef([]);
  const circlesBottomRightRef = useRef([]);

  const handleMouseEnter = () => {
    gsap.to(circlesTopLeftRef.current, {
      x: -25,
      y: -25,
      scaleY: 2,
      ease: "power2.out",
      stagger: 0.1,
    });

    gsap.to(circlesBottomRightRef.current, {
      x: 30,
      y: 30,
      scale: 0.5,
      ease: "elastic.out(1, 0.3)",
      stagger: 0.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(circlesTopLeftRef.current.concat(circlesBottomRightRef.current), {
      x: 0,
      y: 0,
      scale: 1,
      ease: "power2.out",
    });
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
      <div className={styles.buttonEffectContainer}>
        <div
          ref={(el) => (circlesTopLeftRef.current[0] = el)}
          className={`${styles.circle} ${styles.topLeft}`}
        ></div>
        <div
          ref={(el) => (circlesTopLeftRef.current[1] = el)}
          className={`${styles.circle} ${styles.topLeft}`}
        ></div>
        <div
          ref={(el) => (circlesBottomRightRef.current[0] = el)}
          className={`${styles.circle} ${styles.bottomRight}`}
        ></div>
        <div
          ref={(el) => (circlesBottomRightRef.current[1] = el)}
          className={`${styles.circle} ${styles.bottomRight}`}
        ></div>
      </div>
    </div>
  );
};

export default ButtonWithEffects;
