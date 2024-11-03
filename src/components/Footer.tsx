"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.set("[data-gsap-footer]", {
      opacity: 0,
      y: 100
    });
    
    const animation = gsap.to("[data-gsap-footer]", {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "[data-gsap-footer]",
        start: "top 75%",
        end: "top 25%"
      },
      paused: true 
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const lang_rtl = document.querySelector("[data-lang-rtl]") as HTMLButtonElement;
    const lang_ltr = document.querySelector("[data-lang-ltr]") as HTMLButtonElement;
    const HTML = document.documentElement as HTMLHtmlElement;

    if (localStorage.lenght !== 0) { if (localStorage.html_dir) HTML.dir = localStorage.html_dir; };

    lang_rtl.addEventListener("click", () => {
      HTML.dir = "rtl";
      localStorage.setItem("html_dir", "rtl");
    });

    lang_ltr.addEventListener("click", () => {
      HTML.dir = "ltr";
      localStorage.setItem("html_dir", "ltr");
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col d-flex flex-column gap-4" data-gsap-footer>
              <h2 className="text-capitalize p-0 m-0 label-medium">Social Media</h2>

              <ul className="d-flex flex-column gap-3 p-0 m-0">
                <li className="footer-list">
                  <a 
                    href="https://www.linkedin.com/in/mohamed-yasser-2706252aa/"
                    target="_blank"
                    className="footer-link text-capitalize label-small"
                  >linkedin</a>
                </li>

                <li className="footer-list">
                  <a 
                    href="https://wa.me/message/YEX6SYAH54GFC1"
                    target="_blank"
                    className="footer-link text-capitalize label-small"
                  >whatsapp</a>
                </li>

                <li className="footer-list">
                  <a 
                    href="https://www.instagram.com/the_artists_web"
                    target="_blank"
                    className="footer-link text-capitalize label-small"
                  >instagram</a>
                </li>

                <li className="footer-list">
                  <a 
                    href="https://www.youtube.com/@theartistweb"
                    target="_blank"
                    className="footer-link text-capitalize label-small"
                  >youtube</a>
                </li>

                <li className="footer-list">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100013677881896"
                    target="_blank"
                    className="footer-link text-capitalize label-small"
                  >facebook</a>
                </li>
              </ul>
            </div>

            <div className="col d-flex flex-column gap-4" data-gsap-footer>
              <h2 className="text-capitalize p-0 m-0 label-medium">Home Pages</h2>

              <ul className="d-flex flex-column gap-3 p-0 m-0">
                <li className="footer-list">
                  <Link href="/docs" className="footer-link text-capitalize label-small">docs</Link>
                </li>

                <li className="footer-list">
                  <Link href="/cv" className="footer-link text-capitalize label-small">cv</Link>
                </li>

                <li className="footer-list">
                  <Link href="/blog" className="footer-link text-capitalize label-small">blog</Link>
                </li>

                <li className="footer-list">
                  <Link href="/showcase" className="footer-link text-capitalize label-small">showcase</Link>
                </li>
              </ul>
            </div>

            <div className="col d-flex flex-column gap-4" data-gsap-footer>
              <h2 className="text-capitalize p-0 m-0 label-medium">Helpful tools</h2>

              <ul className="d-flex flex-column gap-3 p-0 m-0">
                <li className="footer-list">
                  <Link href="/docs/vscode" className="footer-link text-capitalize label-small">vscode</Link>
                </li>

                <li className="footer-list">
                  <Link href="/docs/helpfulsites" className="footer-link text-capitalize label-small">help ful sites</Link>
                </li>

                <li className="footer-list">
                  <Link href="/docs/git&github" className="footer-link text-capitalize label-small">git & github</Link>
                </li>
              </ul>
            </div>

            <div className="col d-flex flex-column gap-4" data-gsap-footer>
              <h2 className="text-capitalize p-0 m-0 label-medium">Languages</h2>

              <ul className="d-flex flex-column gap-3 p-0 m-0">
                <li className="footer-list">
                  <button className="footer-link text-capitalize label-small" data-lang-rtl>Arabic</button>
                </li>

                <li className="footer-list">
                  <button className="footer-link text-capitalize label-small" data-lang-ltr>English</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright text-second p-0 m-0" data-gsap-footer>Copyright © 2024 The Artist Web. All rights reserved. No reproduction or distribution allowed without permission.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer