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
      {/* <HomeItem>
        <LogoContainer>
          <HomeLogo
            src={process.env.NEXT_PUBLIC_BASE_URL + data.logo.url}
            alt={data.logo.alternativeText}
          />
        </LogoContainer>
      </HomeItem> */}
      <ReactPageScroller pageOnChange={handlePageChange}>
        {data.homeContent.map((item, key) => {
          return (
            <HomeItem key={item.id} id={item.id}>
              <HomeBox1>{item.homePageTitle}</HomeBox1>
              {/* <HomePlacerholder /> */}
              <HomeBox3>
                <div>{item.homePageDescription} </div>
                <More>
                  {Line}
                  <a href={item.pageURL}>{item.moreName}</a>{" "}
                </More>
              </HomeBox3>
              <HomeBox2>{item.homePageTitle}</HomeBox2>
            </HomeItem>
          );
        })}
      </ReactPageScroller>
    </div>
  ) : null;
};

export default Home;
