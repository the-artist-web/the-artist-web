"use client";

import { useEffect } from 'react';

// custom bootstrap min css link
import 'bootstrap/dist/css/bootstrap.min.css';
// custom css link
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // custom bootstrap bundle min js link
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
      })
      .catch((error) => {
        console.error("Error loading Bootstrap JS:", error);
      });
  }, []);

  return (
    <html lang="en" dir="ltr" data-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* favicon */}
        <link rel="icon" href="/image/favicon.png" />
        {/* meta tags */}
        <title>Welcome to the Artists Network – Showcasing My Front-End Development Journey!</title>
        <meta name="title" content="Welcome to the Artists Network – Showcasing My Front-End Development Journey!" />
        <meta name="description" content="a platform dedicated to showcasing my front-end development skills in HTML, 
        CSS, Tailwind Css, JavaScript, TypeScript, JSON, React.js, Git, and GitHub. Enjoy exploring a responsive and 
        visually appealing design that ensures a smooth user experience." />
        <meta name="keywords" content="Html, Css, Sass, Bootstrap, Java Script, Type Script, React Js, Next Js" />
        <meta name="author" content="The Artist Web" />
        {/* google font link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" 
        rel="stylesheet" />
        {/* custom cdnjs link */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};