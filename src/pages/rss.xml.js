import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

// src/pages/rss.xml.js içindeki rss fonksiyonunu şöyle güncelle:
export async function GET(context) {
  return rss({
    title: 'Seferovic Blog',
    description: 'CP/IOAI arşivi',
    site: 'https://seferovic.vercel.app', // <-- Burayı elle yaz!
    items: import.meta.glob('./blog/**/*.{md,mdx}'),
    // ... diğer ayarlar
  });
}
