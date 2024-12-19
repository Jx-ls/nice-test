import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import VideoCard from "@/components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="this is just a test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <VideoCard url='https://youtu.be/iERYAx3iipw' />
          <VideoCard url='https://youtu.be/YhVlV_dMoxg' />
          <VideoCard url='https://youtu.be/D2rnH9XqwvA' />
          <VideoCard url='https://youtu.be/PDCHDYsBDWA' />
          <VideoCard url='https://youtu.be/VxVDJhMU6Zc' />
          <VideoCard url='https://youtu.be/P0NxHvWz1ns' />
          <VideoCard url='https://youtu.be/w_tkq4syNnI' />
          <VideoCard url='https://youtu.be/HM1ld5vIqFg' />
          <VideoCard url='https://youtu.be/f4muqjlSwYI' />
          <VideoCard url='https://youtu.be/zJJGrPb8ymE' />
          <VideoCard url='https://youtu.be/oXpj4H9Qrcw' />
          <VideoCard url='https://youtu.be/unITcghHNVI' />
          <VideoCard url='https://youtu.be/HCl4m9ojMMc' />
          <VideoCard url='https://youtu.be/u7jJ2coeBRo' />
          <VideoCard url='https://youtu.be/GX7TAigwZPw' />
          <VideoCard url='https://youtu.be/S1pFkcsuMYE' />
          <VideoCard url='https://youtu.be/yhtxX3JkShI' />
          <VideoCard url='https://youtu.be/0TJkcTWEu9c' />
          <VideoCard url='https://youtu.be/9W4eyQ7LP7g' />
          <VideoCard url='https://youtu.be/swFVafJvVac' />
        </main>
      </div>
    </>
  );
}
