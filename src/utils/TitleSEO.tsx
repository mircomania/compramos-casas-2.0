import { Helmet } from 'react-helmet-async';

import { defaultSocialImage } from './siteSeo';

type SocialMetadata = {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
};

type TitleSEOProps = {
    title: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    robots?: string;
    metaNoIndex?: boolean;
    openGraph?: SocialMetadata & { url?: string };
    twitter?: SocialMetadata;
};

export function TitleSEO({ title, description, keywords, canonical, robots, metaNoIndex, openGraph, twitter }: TitleSEOProps) {
    const robotsDirective = metaNoIndex ? 'noindex, nofollow' : robots;
    const ogDescription = openGraph?.description ?? description;
    const ogUrl = openGraph?.url ?? canonical;
    const ogImage = openGraph?.image ?? defaultSocialImage.url;
    const isDefaultImage = ogImage === defaultSocialImage.url;
    const ogImageAlt = openGraph?.imageAlt ?? (isDefaultImage ? defaultSocialImage.alt : undefined);
    const twitterDescription = twitter?.description ?? description;
    const twitterImage = twitter?.image ?? ogImage;
    const twitterImageAlt = twitter?.imageAlt ?? (twitterImage === ogImage ? ogImageAlt : undefined);

    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
            {robotsDirective && <meta name="robots" content={robotsDirective} />}

            <meta property="og:title" content={openGraph?.title ?? title} />
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogUrl && <meta property="og:url" content={ogUrl} />}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Compramos Casas" />
            <meta property="og:locale" content="es_MX" />
            <meta property="og:image" content={ogImage} />
            {isDefaultImage && <meta property="og:image:width" content={String(defaultSocialImage.width)} />}
            {isDefaultImage && <meta property="og:image:height" content={String(defaultSocialImage.height)} />}
            {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={twitter?.title ?? title} />
            {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
            <meta name="twitter:image" content={twitterImage} />
            {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}
        </Helmet>
    );
}
