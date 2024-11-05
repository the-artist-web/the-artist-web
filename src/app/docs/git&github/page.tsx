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

const gitCode = `mkdir my-awesome-project

cd my-awesome-project

git init

echo "# My Awesome Project" > README.md

git add README.md

git commit -m "Initial commit with README"

git checkout -b feature/add-new-feature

echo "print('Hello, World!')" > main.py

git add main.py

git commit -m "Add main.py with Hello World script"

git checkout main

git merge feature/add-new-feature

git remote add origin https://github.com/username/my-awesome-project.git

git push -u origin main`;

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

const Page = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("/docs/Sliderbar-git&github.json");
          const data = await res.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error Fetch Data In Git & Github", error);
          setLoading(false);
        };
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      document.title = "git & github | the artist web";
  
      Prism.highlightAll();
    }, []);
  
    return (
      <>
        <Navbar />
        <Aside />
        <SlideDocs file="Sliderbar-git&github.json" />
        <Searchbar file="Sliderbar-git&github.json" />
  
        <main className="main-docs">
          <article>
            <div className="docs-body">
              <div className="container">
                <p className="text-capitalize text-main label-small">docs / git & github</p>
  
                <h1 className="text-capitalize mb-3 headline-small">git & github</h1>
  
                <p className="mb-4 label-small">Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows developers to track changes in their code, collaborate with others, and maintain a history of project modifications. Git's branching and merging features enable multiple developers to work on the same project simultaneously without interfering with each other's work.<br /><br /> GitHub, on the other hand, is a web-based platform that uses Git for version control and collaboration. It provides a user-friendly interface for managing Git repositories and offers features like issue tracking, project management, and code review. GitHub allows developers to host their projects online, making it easy to share code, collaborate with others, and contribute to open-source projects.<br /><br /> Together, Git and GitHub empower developers to manage code effectively, collaborate seamlessly, and maintain robust project histories, fostering a collaborative and innovative development environment.</p>
  
                <pre>
                  <code className="language-javascript">{gitCode}</code>
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