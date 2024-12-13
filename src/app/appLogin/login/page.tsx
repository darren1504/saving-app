"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/appLogin/login/page.module.scss";

export default function Login() {
  return (
    <>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>おかえりなさい</h1>
        <form action="#" method="post" className={styles.loginWrap}>
          <p>メールアドレス</p>
          <input type="text" name="email" placeholder="sample@email.com" />
          <p>パスワード</p>
          <input type="password" name="password" placeholder="パスワード" />
          <div className={styles.loginBtn}>
            <Link href="/">ログイン</Link>
          </div>
        </form>
        <p>
          <Link href="/appLogin/signup">
            アカウントをお持ちでない場合はこちら
          </Link>
        </p>
      </div>
    </>
  );
}
