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
import { LoadingImage, LoadingContainer } from "../styles/styles";

const Pages = ({ json, path, locale, splitURL, errorCode }) => {
  if (errorCode) {
    return <h1>error</h1>;
  } else {
    console.log("path", path);
    console.log("locale", locale);
    console.log("splitURL", splitURL);

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

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
            router.push("/");
            return (
              <LoadingContainer>
                <LoadingImage width={200} height={80} src="/logo.png" />
              </LoadingContainer>
            );
        }
    };

    return pid && !loading && data && json ? (
      <div key={Date.now()}>
        <Head>
          <title>{data.pageHeadline.toUpperCase()} | Paris Curatorial</title>
          <link rel="icon" href="/logo.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          {data.metaTags
            ? data.metaTags.map((tag) => {
                if (tag.type === "MetaValue") {
                  return <meta name={tag.name} content={tag.value}></meta>;
                } else if (tag.type === "MetaProperty") {
                  return <meta property={tag.name} content={tag.value} />;
                }
              })
            : null}
          <link
            rel="canonical"
            href={`pariscuratorial.com/${router.locale}${router.pathname}`}
          />
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
      <LoadingContainer>
        <LoadingImage width={150} height={80} src="/logo.png" />
      </LoadingContainer>
    );
  }
};

export default Pages;

export const getServerSideProps = async (context) => {
  const { resolvedUrl: path, locale } = context;
  let json = {};
  const splitURL = path.split("?")[0];
  const fetchUrl = splitURL.slice(-1) === "s" ? splitURL : splitURL + "s";
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + fetchUrl);
    json = await response.json();
  } catch (error) {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/homes");
    json = await response.json();
  }
  return {
    props: { path, json, locale, splitURL },
  };
};
