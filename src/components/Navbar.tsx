"use client";

import Image from "next/image";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const close_navbar = document.querySelector("[data-close-navbar]") as HTMLButtonElement;
    const navbar = document.querySelector("[data-navbar]") as HTMLDivElement;

    const closeNavbar = () => {
      navbar.classList.add("active");
    };
    close_navbar.addEventListener("click", closeNavbar);
  }, []);

  return (
    <nav className="navbar px-3 py-0 w-100 position-fixed top-0 left-0 right-0 z-3 bg-bg d-md-none" data-navbar>
      <button type="button" className="btn open-aside p-0 d-flex align-items-center gap-2 border-0 title-medium" data-bs-toggle="offcanvas" data-bs-target="#open-aside" data-close-navbar>
        <Image 
          src="/image/logo.png"
          alt="the artist web"
          width="35"
          height="35"
          loading="lazy"
          className="img-logo img-cover"
        />
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

export default Navbar