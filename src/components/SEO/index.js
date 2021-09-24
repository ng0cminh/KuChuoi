import Head from "next/head";
import { domain, slogan } from "../../../next.config";

const SEO = ({ metadata }) => {
  return (
    <Head>
      <title>{`${metadata.title} | ${slogan}`}</title>
      <meta name="og:title" property="og:title" content={metadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domain + "/" + metadata.slug} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content={slogan} />

      <meta
        property="og:image"
        content={
          metadata.image
            ? domain + metadata.image
            : domain + `/images/default/article.jpg`
        }
      />
      <meta
        property="og:image:secure_url"
        content={
          metadata.image
            ? domain + metadata.image
            : domain + `/images/default/article.jpg`
        }
      />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="description" content={metadata.description} />
      <meta
        name="og:description"
        property="og:description"
        content={metadata.description}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@InitHTML" />

      <link rel="icon" type="image/png" href={`${domain}/images/favicon.png`} />
      <link rel="apple-touch-icon" href={`${domain}/images/favicon.png`} />
    </Head>
  );
};

export default SEO;
