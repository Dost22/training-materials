# Seferovic

Dost Seferoğlu tarafından hazırlanan Türkçe competitive programming, algoritma ve
IOAI kaynak arşivi.

Site; materyaller, seçilmiş problem listeleri, kaynak bağlantıları ve uzun vadede
topluluk katkılarıyla büyüyebilecek bir Türk CP arşivi olmak için hazırlanıyor.

## Yapı

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Önemli klasörler:

- `src/pages/`: sayfalar ve rotalar
- `src/content/blog/`: Markdown/MDX materyaller
- `src/components/`: ortak arayüz parçaları
- `src/styles/global.css`: global tema ve bileşen stilleri

## Komutlar

| Komut | Açıklama |
| :-- | :-- |
| `npm install` | Bağımlılıkları kurar |
| `npm run dev` | Geliştirme sunucusunu açar |
| `npm run build` | Statik siteyi `dist/` içine üretir |
| `npm run preview` | Üretilen siteyi yerelde önizler |

## İçerik Ekleme

Yeni bir materyal eklemek için `src/content/blog/` altına Markdown veya MDX dosyası
ekleyin. Frontmatter alanları:

```md
---
title: "Başlık"
description: "Kısa açıklama"
pubDate: "Jun 27 2026"
heroImage: "/src/assets/blog-placeholder-1.jpg"
---
```

Problem ve bağlantı listeleri şimdilik ilgili sayfa dosyalarındaki veri dizilerinden
yönetiliyor.

## Notlar

`node_modules/`, `.venv/`, `.astro/` ve `dist/` yerel/generate edilmiş klasörlerdir;
kaynak kodun parçası olarak tutulmamalıdır.
