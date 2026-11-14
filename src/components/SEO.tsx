import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object;
}

const BASE_URL = 'https://www.sparkselectricandservice.com';

function updateMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export default function SEO({ title, description, canonicalPath, ogImage, structuredData }: SEOProps) {
  const location = useLocation();
  const canonical = `${BASE_URL}${canonicalPath || location.pathname}`;

  useEffect(() => {
    document.title = title;
    updateMetaTag('description', description);
    updateLinkTag('canonical', canonical);

    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonical, 'property');
    updateMetaTag('og:type', 'website', 'property');
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
    }

    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const allStructured = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [];

    if (allStructured.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.textContent = JSON.stringify(allStructured.length === 1 ? allStructured[0] : allStructured);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, structuredData]);

  return null;
}
