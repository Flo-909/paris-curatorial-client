import React from "react";
import {
  PageHeadline,
  PageLayout,
  PrivacyHeadline,
  PrivacyParagraph,
  LangButtonComponent,
} from "../styles/styles";

const Privacy = ({ data }) => {
  console.log("data", data);
  const {
    privacyContent,
    pageHeadline,
    privacyHeadline,
    privacyParagraph,
    language,
  } = data;

  return (
    <PageLayout>
      <PageHeadline>
        <h1>{pageHeadline && pageHeadline}</h1>
      </PageHeadline>
      {privacyContent
        ? privacyContent.map((item) => (
            <>
              <PrivacyHeadline>
                {item.privacyHeadline && item.privacyHeadline}
              </PrivacyHeadline>
              <PrivacyParagraph>
                {item.privacyParagraph && item.privacyParagraph}
              </PrivacyParagraph>
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Privacy;

export const getServerSideProps = async (context) => {
  const { resolvedUrl: path, locale } = context;

  const resMentionsLegales = await fetch(
    "https://new-pc-backend.herokuapp.com" + "/privacy-policies"
  );
  const jsonMentionsLegales = await resMentionsLegales.json();
  const data = locale
    ? jsonMentionsLegales.find((item) => item.language === locale)
    : jsonMentionsLegales.find((item) => item.language === "fr");

  return {
    props: { data },
  };
};
