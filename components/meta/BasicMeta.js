import Head from "next/head";

export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}) {
  return (
    <Head>
      <title>{title.toUpperCase() + " | Paris Curatorial"}</title>
      <meta name="description" content={description ? description : ""} />
      <meta name="keywords" content={keywords ? keywords.join(",") : ""} />
      {author ? <meta name="author" content={author} /> : null}
      <link rel="canonical" href={"pariscuratorial.com" + url} />
    </Head>
  );
}
