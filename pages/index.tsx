import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { HiArrowNarrowRight } from "react-icons/all";
import { white } from "colorette";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
            세상에서<br/> 제일 믿을 만한<br/> 복숭아
        </div>
        <div className={styles.subTitle}>
            지금 만나보세요.
        </div>
        <div className={styles.moveButton}>
            <div className={styles.arrowForward}>
                {/*<HiArrowNarrowRight size={32} color="#ffffff" />*/}
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
