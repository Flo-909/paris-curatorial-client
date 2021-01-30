import React from "react";
import {
  PageHeadline,
  PageLayout,
  PrivacyParagraph,
  PrivacyHeadline,
  LangButtonComponent,
} from "../styles/styles";

const Terms = ({ data }) => {
  const {
    termsConditions,
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
      {termsConditions
        ? termsConditions.map((item) => (
            <>
              <PrivacyHeadline>{item.privacyHeadline}</PrivacyHeadline>
              <PrivacyParagraph>{item.privacyParagraph}</PrivacyParagraph>
            </>
          ))
        : null}
    </PageLayout>
  );
};

export default Terms;
