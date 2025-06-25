import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./Container.css";

const Container: React.FC = () => {
  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Container;
