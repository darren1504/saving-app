"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/appLogin/confirm/page.module.scss";

export default function Confirm() {
  return (
    <>
      <div className={styles.confirmContainer}>
        <h1 className={styles.title}>以下の内容で送信しますよろしいですか？</h1>
        <div className={styles.confirmWrap}>
          <div className={styles.innerWrap}>
            <p>
              メールアドレス
              <br />
              sample@email.com
            </p>
          </div>
          <div className={styles.innerWrap}>
            <p>
              パスワード
              <br />
              abcd1234
            </p>
          </div>
          <div className={styles.btnWrap}>
            <div className={styles.returnBtn}>
              <Link href="/appLogin/signup">入力画面に戻る</Link>
            </div>
            <div className={styles.sendBtn}>
              <Link href="/appLogin/">認証コードを送信</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
