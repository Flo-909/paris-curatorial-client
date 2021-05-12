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
  ArtistImage,
  LangButtonComponent,
  MediaBox,
  ProfileImage,
} from "../styles/styles";
import { useRouter } from "next/router";

const About = ({ data }) => {
  const router = useRouter();
  console.log("Router", router);
  const {
    pageHeadline,
    pageSubheadline,
    pageDescription,
    socialMedias,
    textContents,
    language,
    pictureName,
    profilePicture,
  } = data;

  console.log("data", data);

  return data ? (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      {router.asPath === "/about-grigori-michel" ? (
        <ProfileImage src="/grig.jpg" />
      ) : null}

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
              <MediaBox>{media.mediaHeadline && media.mediaHeadline}</MediaBox>
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
