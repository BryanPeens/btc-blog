"use client";

import React, { useEffect, useState } from "react";
import { getPages } from "@/sanity/sanity-utils";
import Header from "./Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import "../globals.css";

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

        <meta
          name="p:domain_verify"
          content="18b2e53885de597dcf553b1c4463befc"
        />
      </head>
      <body className="mx-auto sm:max-w-[99%] sm:px-5 md:max-w-[95%] md:px-5 lg:max-w-[67%] bg-center">
        <Header title="Bridging The Canyon" pages={pages} />

        <main className="py-8 px-1 my-16">{children}</main>
        <GoogleAnalytics gaId="G-CPE9MBY0KG" />
      </body>
    </html>
  );
};

export default RootLayout;
