"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Prism
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import SlideDocs from "@/components/SlideDocs";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

type DataType = {
    title: string;
    items: {
      name: string;
      link: string;
    }[]
};

const tailwindCssCode = `<div class="space-y-4">
  <div class="w-96 bg-white shadow rounded">
      w-96
  </div>
  <div class="w-80 bg-white shadow rounded">
      w-80
  </div>
  <div class="w-72 bg-white shadow rounded">
      w-72
  </div>
  <div class="w-64 bg-white shadow rounded">
      w-64
  </div>
</div>`;

const Spinners = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center p-5">
      <div className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const Page = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/docs/Sliderbar-tailwind.json");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Tailwind Css", error);
        setLoading(false);
      };
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = "tailwind css | the artist web";

    Prism.highlightAll();
  }, []);

  return (
    <>
      <Navbar />
      <Aside />
      <SlideDocs file="Sliderbar-tailwind.json" />
      <Searchbar file="Sliderbar-tailwind.json" />

      <main className="main-docs">
        <article>
          <div className="docs-body">
            <div className="container">
              <p className="text-capitalize text-main label-small">docs / tailwind css</p>

              <h1 className="text-capitalize mb-3 headline-small">Tailwind CSS Tutorial</h1>

              <p className="mb-4 label-small">Tailwind CSS is a front-end design framework, primarily used to make building and designing websites and web applications easier. Tailwind features a utility-first CSS approach, providing a set of ready-made utility classes that can be used to style elements directly in HTML, making front-end development more efficient and flexible.</p>

              <pre>
                <code className="language-html">{tailwindCssCode}</code>
              </pre>

              {loading ? (
                <Spinners />
              ) : (
                data.map((ele, index) => (
                  <div className="d-flex flex-column gap-2 mt-5" key={index}>
                    <h2 className="text-capitalize title-medium">{ele.title}</h2>
                    
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                      {ele.items.map((ele, index) => (
                        <div className="col" key={index}>
                          <Link href={ele.link} className="btn btn-element text-capitalize rounded-0 label-small">
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
  );
}

export default Page