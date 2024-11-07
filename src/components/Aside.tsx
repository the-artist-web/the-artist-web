"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Aside = () => {
  const pathname = usePathname();

  useEffect(() => {
    const open_navbar = document.querySelector("[data-open-navbar]") as HTMLButtonElement;
    const navbar = document.querySelector("[data-navbar]") as HTMLDivElement;

    const openNavbar = () => { navbar.classList.remove("active"); };
    open_navbar.addEventListener("click", openNavbar);

    return () => { open_navbar.removeEventListener("click", openNavbar); };
  }, []);

  useEffect(() => {
    const theme_light = document.querySelector("[data-theme-light]") as HTMLButtonElement;
    const theme_dark = document.querySelector("[data-theme-dark]") as HTMLButtonElement;
    const HTML = document.documentElement as HTMLElement;

    if (localStorage.length !== 0) {
      if (localStorage.html) HTML.dataset.theme = localStorage.html;
    };

    const themeLight = () => {
      HTML.dataset.theme = "light";
      localStorage.setItem("html", "light");
    };
    theme_light.addEventListener("click", themeLight);

    const themeDark = () => {
      HTML.dataset.theme = "dark";
      localStorage.setItem("html", "dark");
    };
    theme_dark.addEventListener("click", themeDark);

    return () => {
      theme_light.removeEventListener("click", themeLight);
      theme_dark.removeEventListener("click", themeDark);
    };
  }, []);

  return (
    <aside className="offcanvas offcanvas-start aside z-3 d-flex flex-column align-self-center justify-content-between gap-3" id="open-aside" data-bs-backdrop="false">
      <button type="button" className="btn close-aside border-0 bg-transparent d-lg-none title-medium" data-bs-dismiss="offcanvas" data-open-navbar>
        <i className="fa-solid fa-xmark"></i>
      </button>

      <ul className="aside-list p-0 m-0 d-flex flex-column align-self-center overflow-y-scroll">
        <li className="aside-item">
          <Link href="/" className={`aside-link d-flex align-items-center justify-content-center ${pathname === "/" ? "active" : ""}`}>
            <Image 
              src="/the-artist-web/image/logo.png"
              alt="the artist web"
              width="40"
              height="40"
              loading="lazy"
              className="img-logo img-cover"
            />
          </Link>
        </li>

        <li className="aside-item">
          <button type="button" className="aside-link d-flex flex-column align-items-center justify-content-center gap-md-3 open-searchbar label-medium" data-bs-toggle="modal" data-bs-target="#searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="d-flex align-item-center gap-2">
              <span className="ctrl-k rounded-2 d-none align-items-center justify-content-center text-capitalize d-md-flex">
                <i className="fa-brands fa-searchengin"></i>
              </span>

              <span className="ctrl-k rounded-2 d-none align-items-center justify-content-center text-capitalize d-md-flex">
                <i className="fa-regular fa-file-lines"></i>
              </span>
            </div>
          </button>
        </li>

        <li className="aside-item">
          <Link href="/docs" className={`aside-link d-flex flex-column align-items-center justify-content-center gap-2 ${pathname.includes("/docs") ? "active" : ""} label-medium`}>
            <i className="fa-regular fa-file-lines"></i>
            <p className="text-capitalize p-0 m-0 label-small">docs</p>
          </Link>
        </li>

        <li className="aside-item">
          <Link href="/cv" className={`aside-link d-flex flex-column align-items-center justify-content-center gap-2 ${pathname === "/cv" ? "active" : ""} label-medium`}>
            <i className="fa-regular fa-address-card"></i>
            <p className="text-capitalize p-0 m-0 label-small">cv</p>
          </Link>
        </li>
      </ul>

      <div className="d-flex flex-column align-self-center gap-2">
        <div className="btn-group dropend">
          <button type="button" className="btn open-dropmenu border-0 p-0 m-0 title-medium" data-bs-toggle="dropdown">
            <i className="fa-solid fa-ellipsis"></i>
          </button>

          <ul className="dropdown-menu p-0 rounded-2">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/mohamed-yasser-2706252aa/" className="dropmenu-item w-100 d-flex align-items-center justify-content-center title-small">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://wa.me/message/YEX6SYAH54GFC1" className="dropmenu-item w-100 d-flex align-items-center justify-content-center title-small">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.instagram.com/the_artists_web" className="dropmenu-item w-100 d-flex align-items-center justify-content-center title-small">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.youtube.com/@theartistweb" className="dropmenu-item w-100 d-flex align-items-center justify-content-center title-small">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100013677881896" className="dropmenu-item w-100 d-flex align-items-center justify-content-center title-small">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group dropend">
          <button type="button" className="btn open-dropmenu border-0 p-0 m-0 title-medium" data-bs-toggle="dropdown">
            <i className="fa-solid fa-palette"></i>
          </button>

          <ul className="dropdown-menu p-0 rounded-2">
            <li>
              <button type="button" className="dropmenu-theme w-100 d-flex flex-column align-items-center justify-content-center gap-1 title-small" data-theme-dark>
                <i className="fa-regular fa-moon"></i>
                <p className="text-capitalize p-0 m-0 label-small">dark</p>
              </button>
            </li>

            <li>
              <button type="button" className="dropmenu-theme w-100 d-flex flex-column align-items-center justify-content-center gap-1 title-small" data-theme-light>
                <i className="fa-regular fa-sun"></i>
                <p className="text-capitalize p-0 m-0 label-small">light</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Aside