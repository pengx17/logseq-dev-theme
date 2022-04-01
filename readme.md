# Logseq Dev Theme

A theme inspired by Dev.to & Figma.

<img src="./logo.png" width="100" />

This theme is actively maintained and is used in daily basis by the author. It should have best UX on Mac OS.

Features:
- providing bullet threading for editing blocks (also available as [a standalone plugin](https://github.com/pengx17/logseq-plugin-bullet-threading))
- elegant font choices
- delightful colors for markers

## Working Demo

Check out my published knowledge garden at https://pengx17.github.io/knowledge-garden/. Though since the graph is readonly, you cannot test bullet threading feature with it.

## Usage

### Marketplace
This theme and bullet threading are available in the Marketplace.

![](./marketplace.png)

### Using custom.css

The easiest way to adopt this theme is to use jsDelivr CDN by adding the following line to your `custom.css`. You can also change the `@main` part to use the latest version.

```css
/* This must be the first line of the custom.css with other import rules */
@import url("https://cdn.jsdelivr.net/gh/pengx17/logseq-dev-theme@main/custom.css");

/* You can also add other styles below to override the default theme values */
```

Alternatively, you can download this repo and load it as a Logseq Theme Plugin.

### Only use bullet threading styles

Since version `1.20.0`, you can opt in with the only the bullet threading css, which is `bullet_threading.css`.
To change the color and width, set the following variables in `custom.css`:

```css
@import url("https://cdn.jsdelivr.net/gh/pengx17/logseq-dev-theme@main/bullet_threading.css");

:root {
  --ls-block-bullet-active-color: your-favorite-color;
  --ls-block-bullet-threading-width: 2px;
}
```

## Customization

This theme does not provide official customization options. However, you can still change most of the colors and fonts. Please take a look [this issue for guidance](https://github.com/pengx17/logseq-dev-theme/issues/46).

## Caveats

If your theme defines border colors for the `children-block`, the bullet threading css may not work as expected.

## Demo (might be outdated)

![demo](./demo.png)

https://user-images.githubusercontent.com/584378/128587194-bd775264-b3ba-4303-8595-060953fe8030.mp4


## Changelong

You may refer to [Changelog](./CHANGELOG.md), but it might not be well organized.

## Credits

[PiotrSss](https://github.com/PiotrSss) for his [clean-themes](https://github.com/PiotrSss/logseq-clean-themes)
