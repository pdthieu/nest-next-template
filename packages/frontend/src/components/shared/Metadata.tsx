import Head from 'next/head';

interface MetadataProps {
  title: string;
  description?: string;
  previewImage?: string;
  url?: string;
  type?: string;
}

export function Metadata({ title, description: desc, previewImage, url, type }: MetadataProps) {
  const description = desc || 'Template nextjs';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={previewImage} />
      <meta property="og:type" content={type || 'article'} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage} />
    </Head>
  );
}
