import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 600,
      duration: 800
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
