"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const Page = () => {
  useEffect(() => {
    document.title = "Welcome to the Artists Network – Showcasing My Front-End Development Journey!";
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
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
    };
  }, []);

  useEffect(() => {
    const scrollyElement = () => {
      const scrolly_element = document.querySelectorAll("[data-scrolly-element]");
  
      scrolly_element.forEach((ele) => {
        if (window.scrollY >= 100) {
          ele.classList.add("active");
        } else {
          ele.classList.remove("active");
        }
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
        end: "top 25%"
      }
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

              <Link href="/docs" className="btn btn-home text-capitalize label-small" data-scrolly-element>get started</Link>

              <span className="arrow-bottom title-medium" data-scrolly-element>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>

          {/* SKILLS */}
          <section className="skills section">
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/html"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">html</h2>
                    <p className="description text-second m-0 p-0 label-small">
                      HTML, short for HyperText Markup Language, is a markup language used for building and designing web pages. HTML structures website content and defines its essential elements, such as text, images, links, tables, and forms.
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/css"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">css</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    CSS, short for Cascading Style Sheets, is a style language used to control the appearance and design of web pages. CSS allows you to specify how elements on a page, such as colors, fonts, sizes, and spacing, are displayed, allowing developers to create attractive and coordinated designs.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/sass"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">sass</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    Sass, short for Syntactically Awesome Style Sheets, is a language used to write CSS more efficiently and flexibly, making it easier to develop complex designs. Sass adds new features not available in traditional CSS, such as variables, nesting, and partitions, making CSS code more organized and reusable.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/bootstrap"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">bootstrap</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    Bootstrap is an open source framework used for front-end development to design responsive and easy-to-use websites. Developed by the Twitter team, Bootstrap offers a comprehensive library of ready-made code that makes it easy to design elegant websites that are compatible with different devices (such as phones, tablets, and computers).
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/tailwind"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">tailwind css</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    Tailwind CSS is a front-end design framework, primarily used to make building and designing websites and web applications easier. Tailwind features a utility-first CSS approach, providing a set of ready-made utility classes that can be used to style elements directly in HTML, making front-end development more efficient and flexible.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/js"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">java script</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    JavaScript is a dynamic programming language used to add interactivity and liveliness to web pages. JavaScript works alongside HTML and CSS to provide a rich, interactive user experience. With JavaScript, you can create animations, interact with the user (such as clicks and data entry), and fetch data from external servers without reloading the page (Ajax).
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/json"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">json</h2>
                    <p className="description text-second m-0 p-0 label-small">
                      JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application as an alternative to XML.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/ts"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">type script</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    TypeScript is an open source programming language that builds on JavaScript and adds additional features, most notably static typing. Developed by Microsoft, TypeScript provides a more powerful and maintainable development environment, making it popular for large and complex projects.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/react"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">react js</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    React is an open source JavaScript library used to build user interfaces, especially for large and complex web applications. Developed by Facebook, React is known for its speed and efficiency in creating interactive and easy-to-maintain applications.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="https://nextjs.org/"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">next js</h2>
                    <p className="description text-second m-0 p-0 label-small">
                    Next.js is a framework for building web applications using React, and is one of the most popular solutions for modern application development. Developed by Vercel, it offers many powerful features that help developers build robust and fast applications.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/node-js"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">node js</h2>
                    <p className="description text-second m-0 p-0 label-small">
                      Node.js is a powerful, open-source JavaScript runtime built on Chrome’s V8 engine. It allows developers to run JavaScript on the server side, enabling fast, scalable, and efficient back-end development. Known for its non-blocking, event-driven architecture, Node.js is ideal for building real-time applications, like chat apps and APIs, that handle multiple requests simultaneously.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/express"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">express</h2>
                    <p className="description text-second m-0 p-0 label-small">
                      Express.js is a lightweight, Node.js-based framework for building web applications and servers easily. It offers powerful tools for routing, handling requests and responses, and supports middleware for adding features like authentication and error handling. This makes it a popular choice for developing fast, scalable applications.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col" data-gsap-skills>
                <Link
                  href="/docs/mongodb"
                  className="card card-skill border-0 d-flex align-items-center"
                >
                  <div className="card-body p-0">
                    <h2 className="text-capitalize mb-3 label-large">mongodb</h2>
                    <p className="description text-second m-0 p-0 label-small">
                      MongoDB is a flexible, document-oriented NoSQL database that stores data in JSON-like, BSON format, making it easy to work with and highly scalable. Unlike traditional relational databases, MongoDB allows for dynamic schema design, which means you can handle large amounts of unstructured data and update schemas as needed without downtime. This flexibility makes MongoDB popular for applications that require quick access to data, high performance, and the ability to scale horizontally, such as content management systems, real-time analytics, and e-commerce platforms.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </article>
      </main>
    </>
  );
};

export default Page;