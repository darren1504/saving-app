"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/createRoom">Create Room</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
