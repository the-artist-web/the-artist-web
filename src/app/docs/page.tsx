"use client";

import { useEffect } from "react";

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

const cssCode = `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`;

const sassCode = `$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}`;

const bootstrapCode = `<div class="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>`;

const javascriptCode = `document.getElementById("demo").innerHTML = "Hello JavaScript";`;

const tailwindcssCode = `<div class="space-y-4">
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

const jsonCode = `{
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}`;

const typescriptCode = `let firstName: string = "Dylan";`;

const reactjsCode = `import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);`;

const nextjsCode = `import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is the homepage of a simple Next.js app.</p>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}`;

const Docs = () => {
  useEffect(() => {
    document.title = "docs | the artist web";
    
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
              <p className="text-capitalize text-main label-small">docs</p>

              <h1 className="text-capitalize mb-3 headline-small">the artist web</h1>
              
              <p className="label-small">a platform dedicated to showcasing my front-end development skills in <span className="text-second">HTML</span>, <span className="text-second">CSS</span>, <span className="text-second">Sass</span>, <span className="text-second">Bootstrap</span>, <span className="text-second">JavaScript</span>, <span className="text-second">TypeScript</span>, <span className="text-second">JSON</span>, <span className="text-second">React.js</span>, <span className="text-second">Next.js</span>, <span className="text-second">Git</span>, and <span className="text-second">GitHub</span>. Enjoy exploring a responsive and visually appealing design that ensures a smooth user experience.</p>
            
              <p className="mb-5 label-small">Here you will find everything you will need to get started. Let's take a look at what we will be doing.</p>

              <div className="d-flex flex-column gap-5">
                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">1</span>
                      html
                    </div>

                    <p className="description text-second m-0 label-small">HTML, short for HyperText Markup Language, is a markup language used for building and designing web pages. HTML structures website content and defines its essential elements, such as text, images, links, tables, and forms.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-html">{htmlCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">2</span>
                      css
                    </div>

                    <p className="description text-second m-0 label-small">CSS, short for Cascading Style Sheets, is a style language used to control the appearance and design of web pages. CSS allows you to specify how elements on a page, such as colors, fonts, sizes, and spacing, are displayed, allowing developers to create attractive and coordinated designs.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-css">{cssCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">3</span>
                      sass
                    </div>

                    <p className="description text-second m-0 label-small">Sass, short for Syntactically Awesome Style Sheets, is a language used to write CSS more efficiently and flexibly, making it easier to develop complex designs. Sass adds new features not available in traditional CSS, such as variables, nesting, and partitions, making CSS code more organized and reusable.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-css">{sassCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">4</span>
                      bootstrap
                    </div>

                    <p className="description text-second m-0 label-small">Bootstrap is an open source framework used for front-end development to design responsive and easy-to-use websites. Developed by the Twitter team, Bootstrap offers a comprehensive library of ready-made code that makes it easy to design elegant websites that are compatible with different devices (such as phones, tablets, and computers).</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-html">{bootstrapCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">5</span>
                      tailwind css
                    </div>

                    <p className="description text-second m-0 label-small">Bootstrap is an open source framework used for front-end development to design responsive and easy-to-use websites. Developed by the Twitter team, Bootstrap offers a comprehensive library of ready-made code that makes it easy to design elegant websites that are compatible with different devices (such as phones, tablets, and computers).</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-html">{tailwindcssCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">6</span>
                      java script
                    </div>

                    <p className="description text-second m-0 label-small">JavaScript is a dynamic programming language used to add interactivity and liveliness to web pages. JavaScript works alongside HTML and CSS to provide a rich, interactive user experience. With JavaScript, you can create animations, interact with the user (such as clicks and data entry), and fetch data from external servers without reloading the page (Ajax).</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-javascript">{javascriptCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">7</span>
                      json
                    </div>

                    <p className="description text-second m-0 label-small">JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application as an alternative to XML.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-javascript">{jsonCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">8</span>
                      type script
                    </div>

                    <p className="description text-second m-0 label-small">TypeScript is an open source programming language that builds on JavaScript and adds additional features, most notably static typing. Developed by Microsoft, TypeScript provides a more powerful and maintainable development environment, making it popular for large and complex projects.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-javascript">{typescriptCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">9</span>
                      react js
                    </div>

                    <p className="description text-second m-0 label-small">React is an open source JavaScript library used to build user interfaces, especially for large and complex web applications. Developed by Facebook, React is known for its speed and efficiency in creating interactive and easy-to-maintain applications.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-javascript">{reactjsCode}</code>
                    </pre>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
                  <div className="col">
                    <div className="mb-2 d-flex align-items-center gap-3 text-capitalize label-medium">
                      <span className="number d-flex align-items-center justify-content-center rounded-2">10</span>
                      next js
                    </div>

                    <p className="description text-second m-0 label-small">Next.js is a framework for building web applications using React, and is one of the most popular solutions for modern application development. Developed by Vercel, it offers many powerful features that help developers build robust and fast applications.</p>
                  </div>

                  <div className="col">
                    <pre>
                      <code className="language-javascript">{nextjsCode}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </article>
      </main>

      <button 
        type="button" 
        className="btn open-aside-docs p-0 d-flex align-items-center justify-content-center position-fixed z-3 d-lg-none label-small" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#open-aside-docs"
      >
        <i className="fa-regular fa-file-lines"></i>
      </button>
    </>
  )
}

export default Docs