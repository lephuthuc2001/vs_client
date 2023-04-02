import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LogoutBtn() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    logout(() => {
      navigate("/");
    });
  };

  return (
    <div className="hs-dropdown relative inline-flex">
      <label
        id="hs-dropdown-with-header"
        tabIndex={0}
        className="btn btn-ghost btn-circle hs-dropdown-toggle"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="hs-dropdown-open:rotate-180 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </label>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-base-100 shadow-md rounded-lg p-2 mt-2  dark:border dark:border-gray-700"
        aria-labelledby="hs-dropdown-with-header"
      >
        <div className="py-3 px-5 -m-2 bg-base-300 rounded-t-lg dark:bg-gray-700">
          <p className="text-sm text-base-content">Signed in as</p>
          <p className="text-sm font-medium text-base-content">{user.email}</p>
        </div>
        <div className="mt-2 py-2 first:pt-0 last:pb-0 ">
          <a
            className="cursor-pointer flex no-underline items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-base-content focus:ring-2 hover:bg-primary focus:ring-blue-500 hover:text-primary-content"
            onClick={logoutHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 flex-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Log out
          </a>
          <a
            className="cursor-pointer flex no-underline items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-base-content hover:bg-primary focus:ring-2  hover:text-primary-content"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogoutBtn;
