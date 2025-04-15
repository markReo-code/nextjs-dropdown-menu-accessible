"use client"

import React from "react";
import styles from "./index.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerButton({isOpen, setIsOpen}: Props) {

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
        // setIsOpen(!isOpen)
    }

  return (
    <button 
      onClick={toggleMenu} 
      className={`${styles.button} ${isOpen ? styles.open : ""}`}
      aria-controls="drawer"
      aria-expanded={isOpen}
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
     
      type="button"
    >
      <div className={styles.wrap}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </button>
  );
}
