"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TypeProps = {
  file: string;
};

type DataType = {
  title: string;
  items: {
    name: string;
    link: string;
  }[]
};

const Spinners = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const SlideDocs = (props: TypeProps) => {
  const pathname = usePathname();
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/docs/${props.file}`);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Slide Docs", error);
        setLoading(false);
      };
    };

    fetchData();
  }, []);

  return (
    <aside className="offcanvas offcanvas-start slide-docs overflow-y-scroll z-2 d-flex flex-column gap-3" id="open-aside-docs" data-bs-backdrop="false">
      <button 
        type="button" 
        className="close-slide-docs position-absolute p-0 border-0 d-lg-none title-medium"
        data-bs-dismiss="offcanvas"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="d-flex flex-column gap-2">
        <h2 className="text-capitalize label-small">all skills</h2>

        <div className="d-flex flex-column">
          <Link 
            href="/docs/html" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/html") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            html
          </Link>

          <Link 
            href="/docs/css" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/css") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            css
          </Link>

          <Link 
            href="/docs/tailwind" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/tailwind") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            tailwind css
          </Link>

          <Link 
            href="/docs/bootstrap" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/bootstrap") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            bootstrap
          </Link>

          <Link 
            href="/docs/sass" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/sass") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            sass
          </Link>

          <Link 
            href="/docs/js" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/js") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            java script
          </Link>

          <Link 
            href="/docs/json" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/json") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            json
          </Link>

          <Link 
            href="/docs/ts" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/ts") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            type script
          </Link>

          <Link 
            href="/docs/react" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/react") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            react js
          </Link>

          <Link 
            href="https://nextjs.org/" 
            target="_blank"
            className="slide-link text-capitalize d-flex align-items-center gap-2 label-small"
          >
            <i className="fa-regular fa-file-lines"></i>
            next js
          </Link>

          <Link 
            href="/docs/node-js" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/node-js") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            node js
          </Link>

          <Link 
            href="/docs/express" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/express") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            express
          </Link>

          <Link 
            href="/docs/mongodb" 
            className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname.includes("/docs/mongodb") ? "active" : ""} label-small`}
          >
            <i className="fa-regular fa-file-lines"></i>
            mongodb
          </Link>
        </div>
      </div>

      {loading ? (
        <Spinners />
      ) : (
        data.map((ele, index) => (
          <div className="d-flex flex-column gap-2" key={index}>
            <h2 className="text-capitalize label-small">{ele.title}</h2>

            <div className="d-flex flex-column">
              {ele.items.map((ele, index) => (
                  <Link 
                    href={ele.link}
                    className={`slide-link text-capitalize d-flex align-items-center gap-2 ${pathname === ele.link ? "active" : ""} label-small`}
                    key={index}
                  >
                    <span dangerouslySetInnerHTML={{ __html: ele.name }} />
                  </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </aside>
  )
}

export default SlideDocs