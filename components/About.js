import { Global } from "@emotion/react";
import React from "react";
import {
  PageLayout,
  BoxContainer,
  AboutBox1,
  PageHeadline,
  AboutBox2,
  AboutBox3,
  AboutBox4,
  AboutBox5,
  LangButtonComponent,
} from "../styles/styles";

const About = ({ data }) => {
  const {
    pageHeadline,
    pageSubheadline,
    pageDescription,
    socialMedias,
    textContents,
    language,
  } = data;

  console.log("data", data);

  return data ? (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      <AboutBox2>
        <p>
          {pageSubheadline &&
            pageSubheadline.split("*").map((item) => <p key={item}>{item}</p>)}
        </p>
      </AboutBox2>
      {textContents
        ? textContents.map((item) => (
            <>
              <AboutBox3>{item.contentHeadline}</AboutBox3>
              {item.contents
                ? item.contents.map((el) => (
                    <>
                      <AboutBox4>
                        {el.contentSubheadline &&
                          el.contentSubheadline
                            .split("*")
                            .map((item) => <p key={item}>{item}</p>)}
                      </AboutBox4>
                      <AboutBox5>
                        {el.contentDescription &&
                          el.contentDescription
                            .split("*")
                            .map((item) => <p key={item}>{item}</p>)}
                        <p></p>
                        {el.linkName && el.linkURL ? (
                          <a href={el.linkURL && el.linkURL} target="_blank">
                            {el.linkName && el.linkName}
                          </a>
                        ) : null}
                      </AboutBox5>
                    </>
                  ))
                : null}
            </>
          ))
        : null}
      {socialMedias
        ? socialMedias.map((media) => (
            <>
              <AboutBox3>
                {media.mediaHeadline && media.mediaHeadline}
              </AboutBox3>
              {media.medias
                ? media.medias.map((elmedia) => (
                    <>
                      <AboutBox4>
                        {elmedia.mediaName && elmedia.mediaURL ? (
                          <a
                            href={elmedia.mediaURL && elmedia.mediaURL}
                            target="_blank"
                          >
                            {elmedia.mediaName && elmedia.mediaName}
                          </a>
                        ) : null}
                      </AboutBox4>
                    </>
                  ))
                : null}
            </>
          ))
        : null}
    </PageLayout>
  ) : null;
};

export default About;
