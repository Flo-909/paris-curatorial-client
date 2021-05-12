import Head from "next/head";

export default function TwitterCardMeta({ url, title, description }) {
  return (
    <Head>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={""} />
      <meta property="twitter:url" content={"pariscuratorial.com" + url} />
      <meta property="twitter:title" content={title ? title : ""} />
      <meta
        property="twitter:description"
        content={description ? description : ""}
      />
    </Head>
  );
}
