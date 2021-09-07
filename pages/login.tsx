import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import {white} from "colorette";

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                     Sign In
                </div>

                <div className={styles.emailInput}>
                    <div className={styles.emailInputText}>
                        이메일 주소
                    </div>
                </div>

                <div className={styles.passwordInput}>
                    <div className={styles.passwordInputText}>
                        패스워드
                    </div>
                    <div className={styles.passwordShowIcon}>
                        <img src="/iconShow.svg" />
                    </div>
                </div>

                <div className={styles.findPasword}>
                    forgot Password?
                </div>

                <div className={styles.loginButton}>
                    <span>Login</span>
                </div>
            </div>
        </>
    );
};

export default Home;
