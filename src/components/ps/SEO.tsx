import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, type = "website", image, url }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <link rel="canonical" href={url || "https://pstaxiservice.in"} />
    </Helmet>
  );
}
