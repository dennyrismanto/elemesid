import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Head>
          <title>DennRismanto Apps</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
