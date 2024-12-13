"use client";

import React from "react";
import styles from "@/styles/createRoom/page.module.scss";
import Navbar from "../components/navbar";
// import Image from 'next/image';

export default function CreateRoom() {
  return (
    <>
      <div className={styles.createRoomContainer}>
        <h1 className={styles.title}>ルーム作成</h1>
        <div className={styles.groupIcon}></div>
        <form action="#" method="post">
          <input type="text" name="groupName" placeholder="ルーム名" />
        </form>

        <div className={styles.setPrice}>
          <h2>目標金額を入力</h2>
          <p>
            ¥<input type="text" name="price" />
          </p>
        </div>

        <div className={styles.choseShowPrice}>
          <h2>目標金額公開</h2>
          <select name="showPrice" id="showPrice">
            <option value="show">公開する</option>
            <option value="hide">公開しない</option>
          </select>
        </div>

        <div className={styles.choseCategory}>
          <h2>分野を選ぶ</h2>
          <select name="category" id="category">
            <option value="trip">旅行</option>
            <option value="hobby">趣味</option>
            <option value="shopping">買い物</option>
          </select>
        </div>

        <div className={styles.addMembers}>
          <h2>人数制限</h2>
        </div>

        <div className={styles.confirmBtn}>
          <button className={styles.done}>作成する</button>
        </div>
        <Navbar></Navbar>
      </div>
    </>
  );
}
