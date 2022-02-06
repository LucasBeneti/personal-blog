import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkThemeProvider } from "../src/context/DarkTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkThemeProvider>
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
}

export default MyApp;
