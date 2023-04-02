import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import Modal from "../components/Modal";
function MainLayout() {
  return (
    <div className="flex flex-col gap-4 items-center min-h-screen justify-between">
      <MainHeader />
      <Outlet />
      <MainFooter />
      <Modal />
    </div>
  );
}
export default MainLayout;
