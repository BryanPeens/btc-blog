"use client";

import React, { useEffect, useState } from "react";
import { getPages } from "@/sanity/sanity-utils";
import Header from "./Navbar";
import Footer from "./Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "../globals.css";
import { Analytics } from '@vercel/analytics/react';


interface Page {
  _id: string;
  slug: string;
  title: string;
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      const pagesData: Page[] = await getPages();
      setPages(pagesData);
    };

    fetchPages();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Bridging The Canyon</title>
        <meta name="p:domain_verify" content="18b2e53885de597dcf553b1c4463befc"/>

      </head>
      <body className="mx-auto bg-center">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''} />
        <GoogleTagManager gtmId={"GTM-K7JT9LJX"}  />

        <Header title="Bridging The Canyon" pages={pages} />

        <main className="p-2 mt-20">{children}</main>
        <Analytics />
        {/* <Footer/> */}

      </body>
    </html>
  );
};

export default RootLayout;
