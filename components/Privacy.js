import React from "react";
import {
  PageHeadline,
  PageLayout,
  PrivacyHeadline,
  PrivacyParagraph,
  LangButtonComponent,
} from "../styles/styles";

const Privacy = ({ data }) => {
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
        <h1>{pageHeadline}</h1>
      </PageHeadline>
      {privacyContent
        ? privacyContent.map((item) => (
            <>
              <PrivacyHeadline>{item.privacyHeadline}</PrivacyHeadline>
              <PrivacyParagraph>{item.privacyParagraph}</PrivacyParagraph>
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Privacy;