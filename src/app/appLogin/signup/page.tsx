"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/appLogin/signup/page.module.scss";

export default function Signup() {
  return (
    <>
      <div className={styles.signupContainer}>
        <h1 className={styles.title}>ウォレンジへ ようこそ</h1>
        <form action="#" method="post" className={styles.signupWrap}>
          <p>メールアドレス</p>
          <input type="text" name="email" placeholder="sample@email.com" />
          <p>パスワード</p>
          <input type="password" name="password" placeholder="パスワード" />
          <p>パスワードを再入力</p>
          <input type="password" name="password" placeholder="パスワード" />
          <div className={styles.loginBtn}>
            <Link href="/appLogin/confirm">確認画面へ</Link>
          </div>
        </form>
      </div>
    </>
  );
}
