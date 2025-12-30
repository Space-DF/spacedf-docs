/* eslint-env node */
import {Footer, Layout, Navbar} from "nextra-theme-docs";
import {Banner, Head} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import VersionLabel from "./_components/VersionLabel";
import ImageZoomProvider from "../components/ImageZoomProvider";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://spacedf.com"),
  title: {
    template: "%s - SpaceDF",
  },
  description: "SpaceDF: Distributed Fleet Management Platform",
  applicationName: "SpaceDF",
  generator: "Next.js",
  appleWebApp: {
    title: "SpaceDF",
  },
  other: {
    "msapplication-TileImage": "/favicon.ico",
    "msapplication-TileColor": "#fff",
  },
  openGraph: {
    images: ["https://d33et8skld5wvq.cloudfront.net/images/spacedf-og.jpg"],
    siteName: "SpaceDF",
  },
  twitter: {
    images: ["https://d33et8skld5wvq.cloudfront.net/images/spacedf-og.jpg"],
    site: "https://spacedf.com",
  },
};

export default async function RootLayout({children}) {
  const navbar = (
    <Navbar
      logo={
        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <img
            src="/spacedf_logo.svg"
            alt="SpaceDF"
            style={{
              height: "32px",
              width: "auto",
            }}
            className="spacedf-logo"
          />
          <VersionLabel />
        </div>
      }
      // SpaceDF discord server
      chatLink="https://discord.gg/HxCTyMCzuK"
      projectLink="https://github.com/Space-DF/spacedf-docs"
    />
  );
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        faviconGlyph="✦"
        color={{
          hue: 255,
          saturation: 84,
          lightness: {
            light: 80,
            dark: 80,
          },
        }}
      />
      <body>
        <ImageZoomProvider>
          <Layout
            banner={
              <Banner storageKey="SpaceDF Launch">
                🚀 SpaceDF v2025.12.19 is now live!{" "}
                <a
                  href="/blog/v2025.12.19"
                  style={{color: "inherit", textDecoration: "underline"}}
                >
                  Read the release notes
                </a>
              </Banner>
            }
            navbar={navbar}
            footer={
              <Footer>
                <p>
                  SpaceDF is a project from{" "}
                  <a
                    href="https://df.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: "#B7A1F7"}}
                  >
                    Digital Fortress
                  </a>
                  .
                </p>
              </Footer>
            }
            editLink="Edit this page on GitHub"
            docsRepositoryBase="https://github.com/Space-DF/spacedf-docs/blob/main"
            sidebar={{defaultMenuCollapseLevel: 1}}
            pageMap={pageMap}
          >
            {children}
          </Layout>
        </ImageZoomProvider>
      </body>
    </html>
  );
}
