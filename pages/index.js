import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selamat Hari Guru 🎂 👩‍🎓 !</title>
        <meta name="description" content="Selamat Hari Guru 🎂 👩‍🎓" />
        <link rel="icon" href="/kue.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat <a href="javascript:void(0)">Hari Guru!</a> 🎂 👩‍🎓
        </h1>

        <p className={styles.description}>
          <Image src="/kue.png" alt="Kue Hari Guru" width={500} height={500} />
          <Image src="/ramean.jpeg" alt="Kenangan RPL 1 2016-2019" width={500} height={500} />
        </p>
        
        <h1 className={styles.title}>Spesial Untuk Bu Yuli 🌻</h1>
        <h1 className={styles.title}>
          <a href="javascript:void(0)">#Abdul #Fahri #Rafly #Dan Kawan Kawan RPL 🙆‍♂️ 🙆‍♀️</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <a
          href="https://github.com/mrrfly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Muhammad Rafly Ramadhan
          <span className={styles.logo}>🙊</span>
        </a>
      </footer>
    </div>
  );
}
