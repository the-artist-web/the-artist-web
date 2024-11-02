"use client";


import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    gsap.set("[data-gsap-title]", { perspective: 400 });
    
    gsap.from("[data-gsap-title]", {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 360,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.5
    });
  }, []);

  useEffect(() => {
    const scrollyElement = () => {
      const scrolly_element = document.querySelectorAll("[data-scrolly-element]") as NodeListOf<HTMLButtonElement>;
  
      scrolly_element.forEach((ele: any) => {
        if (scrollY >= 100) {
          ele.classList.add("active");
        } else {
          ele.classList.remove("active");
        };
      });
    };

    window.addEventListener("scroll", scrollyElement);

    return () => { window.removeEventListener("scroll", scrollyElement); };
  }, []);

  useEffect(() => {
    gsap.set("[data-gsap-skills]", {
      rotationY: -90,
      opacity: 0,
      y: 100
    });
    
    const animation = gsap.to("[data-gsap-skills]", {
      rotationY: 0,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "[data-gsap-skills]",
        start: "top 75%",
        end: "top 25%",
        toggleActions: "play none none reverse",
      },
      paused: true 
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <Aside />
      <Searchbar file="Skills.json" />
      <main className="main">
        <article>
          {/* HOME */}
          <div className="home">
            <div className="container d-flex flex-column align-items-center justify-content-center position-relative">
              <div className="d-flex align-items-center gap-3 gap-md-4">
                <h1 className="text-home text-capitalize display-large" data-gsap-title>the</h1>
                <h1 className="text-home text-capitalize display-large" data-gsap-title>artist</h1>
                <h1 className="text-home text-capitalize display-large" data-gsap-title>web</h1>
              </div>

              <Link href="/docs/html" className="btn btn-home text-capitalize label-small" data-scrolly-element>learn more</Link>

              <span className="arrow-bottom title-medium" data-scrolly-element>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>

          {/* SKILLS */}
          <section className="skills section">
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/html"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">html</h2>
                    <p className="text-second m-0 p-0 label-small">
                      HTML, short for HyperText Markup Language, is a markup language used for building and designing web pages. HTML structures website content and defines its essential elements, such as text, images, links, tables, and forms.
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/css"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">css</h2>
                    <p className="text-second m-0 p-0 label-small">
                    CSS, short for Cascading Style Sheets, is a style language used to control the appearance and design of web pages. CSS allows you to specify how elements on a page, such as colors, fonts, sizes, and spacing, are displayed, allowing developers to create attractive and coordinated designs.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/sass"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">sass</h2>
                    <p className="text-second m-0 p-0 label-small">
                    Sass, short for Syntactically Awesome Style Sheets, is a language used to write CSS more efficiently and flexibly, making it easier to develop complex designs. Sass adds new features not available in traditional CSS, such as variables, nesting, and partitions, making CSS code more organized and reusable.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/bootstrap"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">bootstrap</h2>
                    <p className="text-second m-0 p-0 label-small">
                    Bootstrap is an open source framework used for front-end development to design responsive and easy-to-use websites. Developed by the Twitter team, Bootstrap offers a comprehensive library of ready-made code that makes it easy to design elegant websites that are compatible with different devices (such as phones, tablets, and computers).
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/tailwindcss"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">tailwind css</h2>
                    <p className="text-second m-0 p-0 label-small">
                    Tailwind CSS is a front-end design framework, primarily used to make building and designing websites and web applications easier. Tailwind features a utility-first CSS approach, providing a set of ready-made utility classes that can be used to style elements directly in HTML, making front-end development more efficient and flexible.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/js"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">java script</h2>
                    <p className="text-second m-0 p-0 label-small">
                    JavaScript is a dynamic programming language used to add interactivity and liveliness to web pages. JavaScript works alongside HTML and CSS to provide a rich, interactive user experience. With JavaScript, you can create animations, interact with the user (such as clicks and data entry), and fetch data from external servers without reloading the page (Ajax).
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/ts"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">type script</h2>
                    <p className="text-second m-0 p-0 label-small">
                    TypeScript is an open source programming language that builds on JavaScript and adds additional features, most notably static typing. Developed by Microsoft, TypeScript provides a more powerful and maintainable development environment, making it popular for large and complex projects.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="/docs/react"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">react js</h2>
                    <p className="text-second m-0 p-0 label-small">
                    React is an open source JavaScript library used to build user interfaces, especially for large and complex web applications. Developed by Facebook, React is known for its speed and efficiency in creating interactive and easy-to-maintain applications.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col" data-gsap-skills>
                <a 
                  href="https://nextjs.org/"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">next js</h2>
                    <p className="text-second m-0 p-0 label-small">
                    Next.js is a framework for building web applications using React, and is one of the most popular solutions for modern application development. Developed by Vercel, it offers many powerful features that help developers build robust and fast applications.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </article>
      </main>
    </>
  );
};

export default Home;