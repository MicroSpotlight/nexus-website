# Nexus product facts
> Verified: 2026-08-12
> Sources: local Nexus repository at commit `7ec45b0e`; App Store Connect app `6779860604`; [MicroSpotlight on GitHub](https://github.com/MicroSpotlight)

## Existence and status
- Product: Nexus — a MicroSpotlight media player for iPhone, iPad, and Android.
- Android release status: version 0.1.0-beta-2 is available as a signed APK from the website's GitHub Releases.
- Apple release status: the iPhone and iPad edition is preparing for the App Store and is not publicly downloadable yet.
- Minimum systems: Android 8.0; iOS/iPadOS 17.0.
- Public website repository: [MicroSpotlight/nexus-website](https://github.com/MicroSpotlight/nexus-website).
- Android download: [Nexus Android 0.1.0-beta-2](https://github.com/MicroSpotlight/nexus-website/releases/download/android-v0.1.0-beta-2/Nexus-Android.apk).

## Product boundary
- Nexus does not provide, host, recommend, proxy, or curate media content or media sources.
- Users connect files and media endpoints they are authorized to access.
- Nexus does not bypass DRM, encrypted HLS, authentication, paywalls, geographic restrictions, or server access controls.

## Verified cross-platform capabilities
- User-configured catalog endpoints, local files, SMB/NAS, WebDAV, and compatible media servers.
- Unified library browsing, search, details, episode selection, favorites, history, downloads, and playback continuation.
- Native and VLC-backed playback, audio/subtitle selection, picture in picture, background audio, and advanced ASS/SSA subtitle layout and transforms.
- Local storage by default and system-protected credentials: Apple Keychain on iOS/iPadOS; AES-GCM with Android Keystore-held keys on Android.
- Apple platforms support optional private CloudKit sync and optional widgets, Live Activities, and Handoff.
- Android supports platform media controls, picture in picture, background playback, offline downloads, and eligible encrypted Android backup/device transfer for selected minimized data.
- The current Android public beta does not include Firebase Analytics or Crashlytics; local diagnostic summaries are bounded and redacted.

## Naming note
- Public search finds unrelated products named “Nexus Player.” This website must always identify the product as “Nexus by MicroSpotlight” and must not reuse third-party branding, copy, screenshots, or claims.
