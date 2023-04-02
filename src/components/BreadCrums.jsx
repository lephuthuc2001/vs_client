import React from "react";
import { Link } from "react-router-dom";

function BreadCrums({ pages }) {
  const navLinks = pages.map((page, index) => {
    const last = pages.length - 1;
    return (
      <li className="text-sm">
        {index !== last && (
          <Link
            className="flex items-center text-neutral hover:text-primary"
            to={page.link}
          >
            {page.name}
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 "
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </Link>
        )}
        {index === last && (
          <span className="font-bold truncate" aria-current="page">
            {page.name}
          </span>
        )}
      </li>
    );
  });

  return (
    <ol
      className="flex items-center whitespace-nowrap min-w-0 self-center justify-start"
      aria-label="Breadcrumb"
    >
      <li className="text-sm">
        <Link
          className="flex items-center text-neutral hover:text-primary"
          to="/"
        >
          Home
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </li>
      {navLinks}
    </ol>
  );
}

export default BreadCrums;
