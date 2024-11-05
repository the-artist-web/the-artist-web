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

const javaScriptCode = `document.getElementById("demo").innerHTML = "Hello JavaScript";`;

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
          const res = await fetch("/the-artist-web/docs/Sliderbar-js.json");
          const data = await res.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error Fetch Data In js", error);
          setLoading(false);
        };
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      document.title = "java script | the artist web";
  
      Prism.highlightAll();
    }, []);
  
    return (
      <>
        <Navbar />
        <Aside />
        <SlideDocs file="Sliderbar-js.json" />
        <Searchbar file="Sliderbar-js.json" />
  
        <main className="main-docs">
          <article>
            <div className="docs-body">
              <div className="container">
                <p className="text-capitalize text-main label-small">docs / java script</p>
  
                <h1 className="text-capitalize mb-3 headline-small">Java Script Tutorial</h1>
  
                <p className="mb-4 label-small">JavaScript is a dynamic programming language used to add interactivity and liveliness to web pages. JavaScript works alongside HTML and CSS to provide a rich, interactive user experience. With JavaScript, you can create animations, interact with the user (such as clicks and data entry), and fetch data from external servers without reloading the page (Ajax).</p>
  
                <pre>
                  <code className="language-javascript">{javaScriptCode}</code>
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
    )
}

export default Page