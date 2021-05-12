import Head from "next/head";

export default function OpenGraphMeta({ url, title, description }) {
  return (
    <Head>
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={"pariscuratorial.com" + url} />
      <meta property="og:title" content={title ? title : ""} />
      <meta
        property="og:description"
        content={description ? description : ""}
      />
      <meta
        property="og:image"
        content={"pariscuratorial.com" + "/og_image.png"}
      />
      <meta property="og:type" content="article" />
    </Head>
  );
}
