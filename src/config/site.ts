import type { SiteNavLink } from "../lib/types";

export const siteConfig = {
  name: "Xzorcn",
  authorName: "bracozs",
  authorUrl: "https://github.com/bracozs",
  repositoryUrl: "https://github.com/BracoZS/Xzorcn",
  repositoryStars: 0,
  frameworkUrl: "https://github.com/pedro-gilmora/source-crafter-xzor",
} as const;

export const navLinks: readonly SiteNavLink[] = [
  { label: "Home", href: "/" },
  { label: "Docs" },
  { label: "Components" },
  { label: "Blocks", muted: true },
];
