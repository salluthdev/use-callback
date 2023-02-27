import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useCallback, useState } from "react";
import List from "./List";

export default function Home() {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <Head>
        <title>Learn useCallback - Thanks to YT @WebDevSimplified</title>
        <meta
          name="description"
          content="Learn useCallback in 8 minutes - Thanks to YT @WebDevSimplified"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${darkTheme && styles.dark}`}>
        <div className={styles.input_wrapper}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          ></input>
          <button onClick={() => setDarkTheme(!darkTheme)}>Dark Mode</button>
        </div>
        <List getItems={getItems} />
      </main>
    </>
  );
}
