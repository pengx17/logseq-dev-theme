module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
          "yarn.lock",
          "custom.css",
          "bullet_threading.css",
        ],
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "zip -qq -r logseq-dev-theme-${nextRelease.version}.zip logo.png *.css demo.png readme.md LICENSE package.json",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "logseq-dev-theme-*.zip",
      },
    ],
  ],
};
