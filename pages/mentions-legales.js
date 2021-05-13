import React from "react";
import Menu from "../components/Menu";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import {
  PageHeadline,
  PageLayout,
  PrivacyHeadline,
  PrivacyParagraph,
  LangButtonComponent,
} from "../styles/styles";

const Privacy = ({ data, menu }) => {
  console.log("data", data);
  const {
    privacyContent,
    pageHeadline,
    privacyHeadline,
    privacyParagraph,
    language,
  } = data;

  return (
    <div>
      <BasicMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        keywords={""}
        author={"Paris Curatorial"}
        url={"/mentions-legales"}
      />
      <OpenGraphMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        url={"/mentions-legales"}
      />
      <TwitterCardMeta
        title={data.pageHeadline}
        description={data.pageDescription ? data.pageDescription : ""}
        url={"/mentions-legales"}
      />
      <Menu menu={menu} />
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
                  {item.privacyParagraph &&
                    item.privacyParagraph
                      .split("*")
                      .map((item) => <p key={item}>{item}</p>)}
                </PrivacyParagraph>
              </>
            ))
          : null}
      </PageLayout>
    </div>
  );
};

export default Privacy;

export const getServerSideProps = async (context) => {
  const { resolvedUrl: path, locale } = context;
  let menu = {};

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

  const resMentionsLegales = await fetch(
    "https://new-pc-backend.herokuapp.com" + "/privacy-policies"
  );
  const jsonMentionsLegales = await resMentionsLegales.json();
  const data = locale
    ? jsonMentionsLegales.find((item) => item.language === locale)
    : jsonMentionsLegales.find((item) => item.language === "fr");

  return {
    props: { data, menu },
  };
};
