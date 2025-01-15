'use client'

import React from "react";
import styles from '@/styles/savingDone/page.module.scss';
import { useSaving } from '../../contexts/SavingContext';

export default function SavingDone() {
    const { amount, roomName } = useSaving();

    return (
        <div className={styles.savingDoneContainer}>
            <p>
                {roomName}に<br />
                {amount}円<br />
                チャージしました
            </p>
        </div>
    );
}