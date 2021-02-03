import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Menu from "../components/Menu";

const Index = ({ json, path, locale }) => {
  console.log("json", json);
  console.log("path", path);
  console.log("locale", locale);

  const [data, setData] = useState();

  useEffect(() => {
    if (json) {
      const newData = json.find((item) => item.language === locale);
      setData(newData);
    }
  }, [json]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return data ? (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>{data.pageHeadline.toUpperCase()} | Paris Curatorial</title>
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

        {/* <meta name="description" content={data.pageDescription} />
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
        <meta name="link" content={data.projectLink} /> */}
      </Head>

      <main>
        <Menu />
        {path === "/" && <Home data={data} />}
      </main>

      <footer>{/* <Footer /> */}</footer>
    </div>
  ) : null;
};

export async function getServerSideProps(context) {
  const { resolvedUrl: path, locale } = context;
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/homes");
  const json = await response.json();
  return { props: { json, path, locale } };
}

export default Index;
