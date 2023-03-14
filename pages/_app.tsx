import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "locomotive-scroll/src/styles/_base.scss";
import "locomotive-scroll/src/styles/_scrollbar.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="main-container" data-scroll-container>
      <Component {...pageProps} />
    </div>
  );
}
