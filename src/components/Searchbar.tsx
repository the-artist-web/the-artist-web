"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type TypeProps = {
  file: string;
};

type DataType = {
  title: string;
  items: {
    name: string;
    link: string;
  }[];
};

const Searchbar = (props: TypeProps) => {
  const [data, setData] = useState<DataType[]>([]);
  const [filterData, setFilterData] = useState<DataType[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/docs/${props.file}`);
        const data = await res.json();
        setData(data);
        setFilterData(data);
      } catch (error) {
        console.error("Error Fetch Data In Searchbar", error);
      }
    };

    fetchData();
  }, [props.file]);

  const runFilterData = () => {
    const query = searchRef.current?.value.toLowerCase() || '';

    if (!query) {
      setFilterData(data);
      return;
    }

    const filter = data
      .map((category) => {
        const matchingItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(query)
        );

        return { ...category, items: matchingItems };
      })
      .filter((category) => category.items.length > 0);

    setFilterData(filter);
  };

  return (
    <div className="modal fade searchbar" id="searchbar">
      <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header py-0 px-3">
            <div className="d-flex align-items-center gap-2 w-100">
              <i className="fa-solid fa-magnifying-glass || text-second label-medium"></i>
              <input 
                ref={searchRef}
                onKeyUp={runFilterData}
                type="text" 
                placeholder="Quick search..." 
                className="searchbar-value label-small" 
              />
            </div>
            <button type="button" className="btn close-searchbar border-0 rounded-0 p-0 m-0 title-small" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-body d-flex flex-column gap-3">
            {searchRef.current?.value === "" ? (
              <p className="text-search text-second w-100 d-flex align-items-center justify-content-center p-0 m-0 label-medium">Start typing to see results</p>
            ) : (
              filterData.map((ele, index) => (
                <div className="d-flex flex-column gap-2" key={index}>
                  <h2 className="text-capitalize label-large">{ele.title}</h2>
                  <div className="d-flex flex-column">
                    {ele.items.map((ele, index) => (
                      <Link href={ele.link} className="searchbar-link text-capitalize d-flex align-items-center justify-content-between label-small" key={index}>
                        <p className="d-flex align-items-center gap-3 m-0 p-0">
                          <i className="fa-regular fa-file-lines"></i>
                          <span dangerouslySetInnerHTML={{ __html: ele.name }} />
                        </p>
                        <p className="m-0 p-0 text-second">docs</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="modal-footer py-0 px-3 d-flex align-items-center justify-content-center">
            <p className="copyright label-small">copyright (c) 2024 the artist web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;