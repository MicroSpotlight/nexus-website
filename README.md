# Nexus Website

Official static website for Nexus by MicroSpotlight.

- Website: <https://nexus.microspotlight.team/>
- Changelog: <https://nexus.microspotlight.team/changelog/>
- Privacy Policy: <https://nexus.microspotlight.team/privacy/>
- Terms of Service: <https://nexus.microspotlight.team/terms/>
- Support: <https://nexus.microspotlight.team/support/>

The site is plain HTML, CSS, and JavaScript. It has no build step, trackers, cookies, external fonts, or third-party runtime dependencies.

## Local preview

```bash
python3 -m http.server 4173 --directory .
```

Then open <http://127.0.0.1:4173/>.

## Deployment

GitHub Pages serves the root of the `main` branch. No GitHub Actions workflow is used.

## Content boundary

Nexus does not provide media content or built-in sources. Website screenshots use synthetic test data and must never be replaced with real private endpoints, credentials, or unlicensed artwork.

## Design records

- [`product-facts.md`](./product-facts.md)
- [`brand-spec.md`](./brand-spec.md)
- [`design-directions/`](./design-directions/)

All rights reserved unless a file explicitly states otherwise.
