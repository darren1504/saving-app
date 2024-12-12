'use client'

import React from "react";
import styles from '@/styles/savingDone/page.module.scss';
import { useState } from "react";

export default function SavingDone() {

    const [chargedValue, setChargedValue] = useState("");
    const [roomNameValue, setRoomNameValue] = useState("");
    return (

        <>
            <div className={styles.savingDoneContainer}>
                <p>
                    setRoomNameValue{roomNameValue}に<br />
                    setChargedValue{chargedValue}円<br />
                    チャージしました
                </p>
            </div>
        </>
    );
}