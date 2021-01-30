import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Projects from "../components/Projects";
import About from "../components/About";
import Artists from "../components/Artists";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Pages = ({ json, path, locale, splitURL, fetchUrl }) => {
  console.log("json", json);
  console.log("path", path);
  console.log("locale", locale);

  console.log("splitURL", splitURL, fetchUrl);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { pid } = router.query;
  console.log(data);
  console.log(data);

  useEffect(() => {
    if (json) {
      const newData = json.find((item) => item.language === locale);
      setData(newData);
    }
  }, [json]);

  const renderContent = () => {
    if (splitURL)
      switch (splitURL) {
        case "/current-projects":
        case "/past-projects":
          return <Projects data={data} />;
          break;
        case "/artists":
          return <Artists data={data} />;
          break;
        case "/about-grigori-michel":
        case "/about-paris-curatorial":
          return <About data={data} />;
          break;
        case "/privacy-policies":
          return <Privacy data={data} />;
          break;
        case "/terms-and-conditions":
          return <Terms data={data} />;
          break;
        case "/contact":
          return <Contact data={data} />;
          break;
        default:
          return <h1>Default</h1>;
      }
  };

  console.log("data ==>", data);
  return pid && !loading && data && json ? (
    <div key={Date.now()}>
      <Head>
        <title>{data.pageHeadline.toUpperCase()} | Paris Curatorial</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={data.pageDescription} />
        <meta name="keywords" content={data.pageDescription} />
        <meta name="author" content="Grigori Michel" />
        <meta name="application-name" content="Paris Curatorial" />
        <meta name="index" />
        <meta name="robots" content="index,follow" />
        <meta name="follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="category" content="art"></meta>
        <meta name="Classification" content="Art"></meta>
        <meta name="og:title" content={data.contentSubheadline} key="title" />
        <meta name="og:type" content="art" key="type" />
        <meta name="og:url" content="https://i.ibb.co/TTqY8Bx/logo.png" />
        <meta name="og:image" content="https://i.ibb.co/TTqY8Bx/logo.png" />
        <meta name="og:site_name" content="Paris Curatorial" />
        <meta name="og:description" content={data.pageHeadline.toUpperCase()} />
        <meta name="link" content={data.projectLink} />
      </Head>
      <main>
        <Menu />
        {renderContent()}
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Pages;

export const getServerSideProps = async (context) => {
  const { resolvedUrl: path, locale } = context;
  const splitURL = path.split("?")[0];
  const fetchUrl = splitURL.slice(-1) === "s" ? splitURL : splitURL + "s";

  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + fetchUrl);
  const json = await response.json();
  return { props: { path, json, locale, splitURL, fetchUrl } };
};
