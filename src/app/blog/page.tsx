"use client";

import { useEffect } from "react";

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    document.title = "blog | the artist web";
  }, []);

  return (
    <>
      <Navbar />
      <Aside />
      <Searchbar file="Skills.json" />
      <main className="main">
        <article>
          Body Blog

          <Footer />
        </article>
      </main>
    </>
  )
}

export default Blog