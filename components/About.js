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
        <h1>{pageHeadline}</h1>
      </PageHeadline>
      <AboutBox2>
        <p>{pageSubheadline}</p>
      </AboutBox2>
      {textContents
        ? textContents.map((item) => (
            <>
              <AboutBox3>{item.contentHeadline}</AboutBox3>
              {item.contents.map((el) => (
                <>
                  <AboutBox4>{el.contentSubheadline}</AboutBox4>
                  <AboutBox5>
                    {el.contentDescription}
                    <p></p>
                    {el.linkName && el.linkURL ? (
                      <a href={el.linkURL} target="_blank">
                        {el.linkName}
                      </a>
                    ) : null}
                  </AboutBox5>
                </>
              ))}
            </>
          ))
        : null}
      {socialMedias
        ? socialMedias.map((media) => (
            <>
              <AboutBox3>{media.mediaHeadline}</AboutBox3>
              {media.medias.map((elmedia) => (
                <>
                  <AboutBox4>
                    {elmedia.mediaName && elmedia.mediaURL ? (
                      <a href={elmedia.mediaURL} target="_blank">
                        {elmedia.mediaName}
                      </a>
                    ) : null}
                  </AboutBox4>
                </>
              ))}
            </>
          ))
        : null}
    </PageLayout>
  ) : null;
};

export default About;
