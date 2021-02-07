import "../styles/globals.css";
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  console.log("pageProps in app.js", pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
