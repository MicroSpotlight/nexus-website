# Nexus · Brand Spec
> Captured: 2026-08-12
> Source: Nexus iOS and Android design tokens, current simulator evidence, and the production app icon assets
> Completeness: full for the cross-platform website; platform-store marketing screenshots are still pending

## Core assets

### Logo and app icon
- Light icon: `assets/nexus-app-icon-light.png` (1024×1024, RGB).
- Dark icon: `assets/nexus-app-icon-dark.png` (1024×1024, RGB).
- Current in-app mark: paired black/blue capsules on a white rounded square, supplied as the new default product icon and shared by the app and website.
- Intended uses: app icon in hero/social previews; in-app mark in navigation and compact signatures.
- Do not stretch, recolor, outline, rotate, or combine either mark with another brand.

### UI screenshots
- Primary iPad library: `assets/nexus-library-ipad.png` (2064×2752).
- Primary iPhone onboarding: `assets/nexus-onboarding-iphone.png` (1206×2622).
- Supporting iPad details: `assets/nexus-detail-ipad.png` (2064×2752).
- Screenshots are current synthetic UI-test evidence and contain no real source URLs, credentials, private user data, or third-party artwork.
- Selection notes: chosen from more than ten current iPhone/iPad candidates for clarity, resolution, product coverage, and App Store-safe content. Each is suitable for large responsive display.
- Android is represented by its dedicated platform card and release information until a production-safe Android marketing screenshot set is available. Existing iPhone/iPad screenshots must not be relabeled as Android UI.

### Social preview
- Cross-platform Open Graph card: `assets/nexus-social-card.png` (1200×630, RGB).
- The device imagery is explicitly representative iPhone/iPad UI; the platform line communicates product availability without presenting it as Android UI.

## Auxiliary assets

### Color palette
- Coral accent: `#FF5E57` — default `AccentColorOption.coral`.
- Light background: `#F7F8FC` — `NexusTheme.background`.
- Light panel: `#FFFFFF`.
- Light strong panel: `#EEF0F6`.
- Light ink: `#111319`.
- Light secondary: `#474B58`.
- Light border: `#D8DCE5`.
- Dark background: `#0A0A0B`.
- Dark panel: `#141416`.
- Dark strong panel: `#1C1C1F`.
- Dark ink: `#F5F5F7`.
- Success: `#52D273`.

### Typography
- Display/body: native system typography (`-apple-system`, BlinkMacSystemFont, Segoe UI, Roboto, and platform fallbacks).
- Simplified Chinese: PingFang SC fallback.
- Numeric metadata: tabular system numerals.
- Website scale: 88 / 64 / 48 / 32 / 22 / 17 / 15 / 13.

### Layout and motion
- Spacing rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 144.
- Continuous radii: 12 / 16 / 24 / 32; pills only for compact controls.
- Minimum target: 44×44px.
- Motion: 180–700ms, ease-out with restrained scale/translation; reduced-motion mode removes nonessential movement.
- Section headers use a small coral eyebrow followed by a large, tightly tracked title.

### Vibe keywords
- Platform-native
- Calm
- Precise
- User-controlled
- Cinema-capable

## Completeness notes
- The default product icon uses black and blue while the in-app interface accent remains coral. The website treats the icon as product artwork and coral as the interface/action color rather than blending them into a new identity.
- No custom marketing photography is used. Product UI is the hero asset.
- English simulator screenshots and production-safe Android screenshots were not available in the current evidence set; the selected screenshots show the real Simplified Chinese iPhone/iPad interface, and the website supplies complete English and Chinese text independently.
