'use client'

import React from "react";
import styles from '@/styles/savingPage/page.module.scss';
import { useState } from "react";
// import Image from 'next/image';

export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  
  const handleKeyPress = (value: string) => {
    if (value === "←") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <>
      <div className={styles.savingPageContainer}>
        <div className={styles.numHolder}>{displayValue}</div>
        <button className={styles.savingButton}>貯金する</button>
        <table className={styles.numberKeys}>
          <tbody>
            <tr>
              <td><button onClick={() => handleKeyPress("1")}>1</button></td>
              <td><button onClick={() => handleKeyPress("2")}>2</button></td>
              <td><button onClick={() => handleKeyPress("3")}>3</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleKeyPress("4")}>4</button></td>
              <td><button onClick={() => handleKeyPress("5")}>5</button></td>
              <td><button onClick={() => handleKeyPress("6")}>6</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleKeyPress("7")}>7</button></td>
              <td><button onClick={() => handleKeyPress("8")}>8</button></td>
              <td><button onClick={() => handleKeyPress("9")}>9</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleKeyPress("00")}>00</button></td>
              <td><button onClick={() => handleKeyPress("0")}>0</button></td>
              <td><button onClick={() => handleKeyPress("←")}>←</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
