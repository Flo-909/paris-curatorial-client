import "../styles/globals.css";
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  console.log("pageProps", pageProps);
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
