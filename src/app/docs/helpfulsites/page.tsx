"use client";

import Link from "next/link";
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
    link: string;
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
          const res = await fetch("/docs/Sliderbar-helpfulsites.json");
          const data = await res.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error Fetch Data In Helpfulsites", error);
          setLoading(false);
        };
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      document.title = "help ful sites | the artist web";
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
                <p className="text-capitalize text-main label-small">docs / help fuls ites</p>
  
                <h1 className="text-capitalize mb-3 headline-small">help ful sites</h1>
  
                <p className="mb-3 label-small">This page is dedicated to curating a comprehensive list of all the essential websites and tools I use for frontend development. Whether you're a beginner or an experienced developer, you'll find valuable resources here that can enhance your workflow, boost productivity, and inspire creativity. From coding tutorials and design inspiration to frameworks and libraries, HelpfulSites is your one-stop shop for all things frontend. Explore, discover, and elevate your development journey!</p>
  
                {loading ? (
                  <Spinners />
                ) : (
                  data.map((ele, index) => (
                    <div className="d-flex flex-column gap-2 mt-5" key={index}>
                      <h2 className="text-capitalize title-medium">{ele.title}</h2>
                      
                      <div className="row row-cols-1 row-cols-md-2 g-4">
                        {ele.items.map((ele, index) => (
                          <div className="col" key={index}>
                            <div className="card card-help-site rounded-3 label-small">
                                <Link href={ele.link} target="_blank" className="card-body p-0">
                                    <h2 className="text-text text-capitalize m-0 p-0 label-large">{ele.name}</h2>
                                    <p className="text-second mt-3 text-capitalize label-small">{ele.description}</p>
                                </Link>
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