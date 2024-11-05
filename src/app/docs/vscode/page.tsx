"use client";

import { useEffect, useState } from "react";

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

type DataType = {
  title: string;
  items: {
    name: string;
    shortcut: string;
    description: string;
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
          const res = await fetch("/docs/Sliderbar-VsCode.json");
          const data = await res.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error Fetch Data In VsCode", error);
          setLoading(false);
        };
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      document.title = "VsCode | the artist web";
    }, []);
  
    return (
      <>
        <Navbar />
        <Aside />
        <Searchbar file="Skills.json" />
  
        <main className="main pt-help">
          <article>
            <div className="docs-body pb-help">
              <div className="container">
                <p className="text-capitalize text-main label-small">docs / vs code</p>
  
                <h1 className="text-capitalize mb-3 headline-small">vs code</h1>
  
                <p className="mb-3 label-small">VS Code, or Visual Studio Code, is an open-source text editor developed by Microsoft. It features a simple and easy-to-use user interface, and supports many programming languages ​​such as JavaScript, Python, HTML, CSS, and TypeScript, making it popular with developers around the world. It offers a range of advanced features such as live debugging, artificial intelligence features, automatic code completion, code version control via Git, and the ability to add extensions to increase productivity.</p>
  
                {loading ? (
                  <Spinners />
                ) : (
                  data.map((ele, index) => (
                    <div className="d-flex flex-column gap-2 mt-5" key={index}>
                      <h2 className="text-capitalize title-medium">{ele.title}</h2>
                      
                      <div className="row row-cols-1 row-cols-md-2 g-4">
                        {ele.items.map((ele, index) => (
                          <div className="col" key={index}>
                            <div className="card card-help rounded-3 label-small">
                                <div className="card-body p-0">
                                    <p className="text-main text-capitalize label-small">{ele.name}</p>
                                    <h2 className="text-text text-capitalize m-0 p-0 label-large">{ele.shortcut}</h2>
                                    <p className="text-second mt-3 text-capitalize label-small">{ele.description}</p>
                                </div>
                            </div>
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