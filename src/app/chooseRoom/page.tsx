'use client'

import React from "react";
import styles from '@/styles/chooseRoom/page.module.scss';

// import { useState } from "react";

export default function ChooseRoom() {
    return (
        <>
            <div className={styles.chooseRoomContainer}>
                <div className={styles.roomList}>
                    <div className={styles.roomCard}>
                        <h2 className={styles.roomName}>インドネシア旅行</h2>
                        <div className={styles.description}>
                            <p className={styles.category}>旅行</p>
                            <p>/</p>
                            <p className={styles.members}>3人</p>
                            <p>/</p>
                            <p className={styles.price}>50,000円</p>
                        </div>
                        <button>選ぶ</button>
                    </div>
                    <div className={styles.roomCard}>
                        <h2 className={styles.roomName}>節約</h2>
                        <div className={styles.description}>
                            <p className={styles.category}>生活</p>
                            <p>/</p>
                            <p className={styles.members}>5人</p>
                            <p>/</p>
                            <p className={styles.price}>非公開</p>
                        </div>
                        <button>選ぶ</button>
                    </div>
                    <div className={styles.roomCard}>
                        <h2 className={styles.roomName}>ベンツ買おう</h2>
                        <div className={styles.description}>
                            <p className={styles.category}>趣味</p>
                            <p>/</p>
                            <p className={styles.members}>10人</p>
                            <p>/</p>
                            <p className={styles.price}>非公開</p>
                        </div>
                        <button>選ぶ</button>
                    </div>
                    <div className={styles.roomCard}>
                        <h2 className={styles.roomName}>PS5購入計画</h2>
                        <div className={styles.description}>
                            <p className={styles.category}>趣味</p>
                            <p>/</p>
                            <p className={styles.members}>4人</p>
                            <p>/</p>
                            <p className={styles.price}>50,000円</p>
                        </div>
                        <button>選ぶ</button>
                    </div>
                </div>
            </div>
        </>
    );
}
