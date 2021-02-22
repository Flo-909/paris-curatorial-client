import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import {
  HomeLogo,
  LogoContainer,
  PageLayout,
  HomeBox1,
  HomeBox2,
  HomeBox3,
  HomeItem,
  More,
  CircleContainer,
  Circles,
} from "../styles/styles";
import { useRouter } from "next/router";
import ReactPageScroller from "react-page-scroller";
import Link from "next/link";

const Home = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState([]);
  const router = useRouter();
  console.log(router);

  const Line = (
    <svg
      width="60"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="scale-in-left mt-4"
    >
      <line
        x1="50"
        x2="5"
        y1="5"
        y2="5"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="butt"
      />
    </svg>
  );

  useEffect(() => {
    if (router.asPath === "/") setPageNumber(data.homeContent.length);
  }, []);

  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number + 1);
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pageNumber; i++) {
      pageNumbers.push(
        <Circles
          key={i}
          eventKey={i - 1}
          style={{ background: currentPage === i ? "#4e4e4e" : "" }}
          onSelect={handlePageChange}
        ></Circles>
      );
    }

    return [...pageNumbers];
  };

  return data && router.asPath === "/" ? (
    <div>
      <CircleContainer>{getPagesNumbers()}</CircleContainer>

      <ReactPageScroller pageOnChange={handlePageChange}>
        {data.homeContent
          ? data.homeContent.map((item, key) => {
              return (
                <HomeItem key={item.id && item.id} id={item.id && item.id}>
                  {item.homePageTitle && (
                    <HomeBox1>{item.homePageTitle}</HomeBox1>
                  )}
                  <HomeBox3>
                    <div>
                      {item.homePageDescription && item.homePageDescription}{" "}
                    </div>
                    {item.pageURL && item.moreName ? (
                      <More>
                        {Line}
                        <Link href={item.pageURL}>{item.moreName}</Link>
                      </More>
                    ) : null}
                  </HomeBox3>
                  <HomeBox2>
                    {item.homePageTitle && item.homePageTitle}
                  </HomeBox2>
                  {item.pageLogo ? (
                    <HomeLogo
                      style={{ backgroundImage: `url(${item.pageLogo.url})` }}
                    />
                  ) : // <HomeLogo
                  //   src={item.pageLogo.url}
                  //   alt={item.homePageTitle}
                  // />
                  null}
                </HomeItem>
              );
            })
          : null}
      </ReactPageScroller>
    </div>
  ) : null;
};

export default Home;
