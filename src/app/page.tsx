'use client'

import React from "react";
import styles from '@/styles/savingPage/page.module.scss';
// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <form action="" method="get">
        <input type="text" name="price" />
      </form>
      <button>貯金する</button>
      <table className={styles.numberKeys}>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>0</td>
            <td>00</td>
            <td>000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
