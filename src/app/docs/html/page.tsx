"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Prism
import 'prismjs/themes/prism-okaidia.css';

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import SlideDocs from "@/components/SlideDocs";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`;

type DataType = {
  title: string;
  items: {
    name: string;
    link: string;
  }[]
};

const Spinners = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center p-5">
      <div className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const page = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/docs/Sliderbar-html.json");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Slide Docs", error);
        setLoading(false);
      };
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = "html | the artist web";

    const Prism = require('prismjs');
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Navbar />
      <Aside />
      <SlideDocs file="Sliderbar-html.json" />
      <Searchbar file="Sliderbar-html.json" />

      <main className="main-docs">
        <article>
          <div className="docs-body">
            <div className="container">
              <p className="text-capitalize text-main label-small">docs / html</p>

              <h1 className="text-capitalize mb-3 headline-small">HTML Tutorial</h1>

              <p className="mb-4 label-small">HTML, short for HyperText Markup Language, is a markup language used for building and designing web pages. HTML structures website content and defines its essential elements, such as text, images, links, tables, and forms.</p>

              <pre>
                <code className="language-html">{htmlCode}</code>
              </pre>

              {loading ? (
                <Spinners />
              ) : (
                data.map((ele, index) => (
                  <div className="d-flex flex-column gap-2 mt-5" key={index}>
                    <h2 className="text-capitalize title-medium">{ele.title}</h2>
                    
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                      {ele.items.map((ele, index) => (
                        <div className="col" key={index}>
                          <Link href={ele.link} className="btn btn-element text-capitalize border-0 label-small">
                            <span dangerouslySetInnerHTML={{ __html: ele.name }} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <Footer />
        </article>
      </main>

      <button
        type="button"
        className="btn open-aside-docs rounded-pill border-0 p-0 d-flex align-items-center justify-content-center position-fixed z-3 d-lg-none label-small"
        data-bs-toggle="offcanvas"
        data-bs-target="#open-aside-docs"
      >
        <i className="fa-regular fa-file-lines"></i>
      </button>
    </>
  )
}

export default page