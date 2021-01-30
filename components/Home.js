import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React, { useEffect, useState } from "react";
import { HomeLogo, PageLayout, AboutBox3 } from "../styles/styles";

const Home = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  console.log("data", data);
  console.log("current", current);

  const nextSlide = (e) => {
    if (!scrolling) {
      const newCurrent = current + 1;
      setCurrent(newCurrent);
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => nextSlide(e));
  });

  return data ? (
    <PageLayout>
      {current === 0 ? (
        <HomeLogo
          src={process.env.NEXT_PUBLIC_BASE_URL + data.logo.url}
          alt={data.logo.alternativeText}
        />
      ) : null}

      {data.homeContent.map((item) => {
        if (item.id === current) {
          return <AboutBox3 key={item.id}>{item.homePageTitle}</AboutBox3>;
        }
      })}
    </PageLayout>
  ) : null;
};

export default Home;
