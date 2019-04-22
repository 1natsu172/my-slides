import React, { Fragment } from 'react'

export const Meta = ({
  title,
  description,
  locale = 'ja_JP',
  publishedAt,
  slug
}) => (
  <Fragment>
    {/**
     * @TODO GAタグ
     * @TODO oEmbed
     */}
    {/* <link rel="canonical" href={`https://slides.1natsu.net/${slug}/`} /> */}
    <meta property="og:site_name" content="1natsu's talk slides" />
    <meta property="og:locale" content={locale} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://slides.1natsu.net/${slug}/`} />
    <meta
      property="og:image"
      content={`https://slides.1natsu.net/${slug}.png`}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={`https://slides.1natsu.net/${slug}/`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image:src"
      content={`https://slides.1natsu.net/${slug}.png`}
    />
    <meta name="twitter:site" content="@1natsu172" />
    <meta property="article:author" content="1natsu" />

    <meta
      property="article:published_time"
      content={publishedAt.toISOString()}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </Fragment>
)
