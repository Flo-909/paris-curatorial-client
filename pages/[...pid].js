import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Projects from "../components/Projects";
import About from "../components/About";
import Artists from "../components/Artists";
import Privacy from "./mentions-legales";
import Terms from "../components/Terms";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { LoadingImage, LoadingContainer } from "../styles/styles";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

const Pages = ({ data, path, locale, splitURL, menu, footer }) => {
  console.log("path", path, splitURL);
  console.log("locale", locale);
  console.log("data", data);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { pid } = router.query;

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

  return pid && !loading && data ? (
    <div key={Date.now()}>
      <BasicMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        keywords={""}
        author={"Paris Curatorial"}
        url={splitURL}
      />
      <OpenGraphMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        url={splitURL}
      />
      <TwitterCardMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        url={splitURL}
      />
      <main>
        <Menu menu={menu} />
        {renderContent()}
        <Home />
      </main>

      <footer>
        <Footer menu={menu} footer={footer} locale={locale} />
      </footer>
    </div>
  ) : null;
};

export default Pages;

export const getServerSideProps = async (context) => {
  const { resolvedUrl: path, locale } = context;
  let data = {};
  let menu = {};
  let footer = {};

  const splitURL = path.split("?")[0];
  const fetchUrl = splitURL.slice(-1) === "s" ? splitURL : splitURL + "s";

  try {
    const response = await fetch(
      "https://new-pc-backend.herokuapp.com" + fetchUrl
    );
    const json = await response.json();
    if (json && locale) {
      const newData = json.find((item) => item.language === locale);
      data = newData;
    } else if (json && !locale) {
      const newData = json.find((item) => item.language === "fr");
      data = newData;
    }
  } catch (error) {
    data = {};
  }

  const menuResponse = await fetch(
    "https://new-pc-backend.herokuapp.com" + "/menus"
  );
  const menuJson = await menuResponse.json();
  const menuData = locale
    ? menuJson.find((item) => item.language === locale)
    : menuJson.find((item) => item.language === "fr");
  menu = menuData.pageMenu.filter(
    (item) =>
      item.url !== "/privacy-policies" && item.url !== "/terms-and-conditions"
  );
  const resContact = await fetch(
    "https://new-pc-backend.herokuapp.com" + "/contacts"
  );
  const jsonContact = await resContact.json();
  footer = locale
    ? jsonContact.find((item) => item.language === locale)
    : jsonContact.find((item) => item.language === "fr");

  // try {

  // } catch (error) {
  //   console.log("error", error);
  //   const response = await fetch(
  //     "https://new-pc-backend.herokuapp.com" + fetchUrl
  //   );
  //   json = await response.json();
  //   const menuResponse = await fetch(
  //     "https://new-pc-backend.herokuapp.com" + "/menus"
  //   );
  //   const menuJson = await menuResponse.json();
  //   const menuData = menuJson.find((item) => item.language === "fr");
  //   menu = menuData.pageMenu.filter(
  //     (item) =>
  //       item.url !== "/privacy-policies" && item.url !== "/terms-and-conditions"
  //   );
  //   const resContact = await fetch(
  //     "https://new-pc-backend.herokuapp.com" + "/contacts"
  //   );
  //   const jsonContact = await resContact.json();
  //   footer = jsonContact.find((item) => item.language === "fr");
  // }

  return {
    props: { path, data, locale, splitURL, menu, footer },
  };
};
