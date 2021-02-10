import "../styles/globals.css";
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  console.log("pageProps", pageProps);
  if (pageProps.statusCode) {
    console.log("error", pageProps.statusCode, pageProps.message);
    return (
      <Error statusCode={pageProps.statusCode} title={pageProps.message} />
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
