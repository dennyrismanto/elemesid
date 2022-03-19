import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
