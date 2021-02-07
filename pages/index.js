import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import { LoadingImage, LoadingContainer } from "../styles/styles";

const Index = ({ json, path, locale, menu }) => {
  console.log("json", json);
  console.log("path", path);
  console.log("locale", locale);

  const [data, setData] = useState();

  useEffect(() => {
    if (json && locale) {
      const newData = json.find((item) => item.language === locale);
      setData(newData);
    } else if (json && !locale) {
      const newData = json.find((item) => item.language === "fr");
      setData(newData);
    } else {
      console.log("error in fetch");
    }
  }, [json]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadingImage = () => {
    if (!data && path === "/") {
      return (
        <LoadingContainer>
          <LoadingImage width={200} height={80} src="/logo.png" />
        </LoadingContainer>
      );
    }
  };

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
      </Head>

      <main>
        <Menu menu={menu} />
        {path === "/" && <Home data={data} />}
      </main>
    </div>
  ) : null;
};

export async function getServerSideProps(context) {
  const { resolvedUrl: path, locale } = context;
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/homes");
  const json = await response.json();

  const menuResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/menus");
  const menuJson = await menuResponse.json();
  const menuData = menuJson.find((item) => item.language === locale);
  const menu = menuData.pageMenu.filter(
    (item) =>
      item.url !== "/privacy-policies" && item.url !== "/terms-and-conditions"
  );

  return { props: { json, path, locale, menu } };
}

export default Index;