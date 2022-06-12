import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Walid";
export const siteTitle = "Poke Story";

export default function Layout({ children, home = false }) {
  return (
    // <div className="bg-gradient-to-b from-blue-500 to-blue-800">
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Learn about all Pokemon Generations"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/pokestory-logo.svg"
              height={144}
              width={288}
              alt={name}
            />
            {/* <h1 className="p-4 text-3xl font-bold uppercase">Pokestory</h1> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/pokestory-logo.svg"
                  height={144}
                  width={288}
                  alt={name}
                />
              </a>
            </Link>
            {/* <h1 className="p-4 text-3xl font-bold uppercase">Pokestory</h1> */}
          </>
        )}
      </header>
      <main className="flex flex-col h-screen overflow-hidden p-4">
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
