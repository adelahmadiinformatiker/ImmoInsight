import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">
        Company name
      </a>
      <input className="form-control w-100" type="text" placeholder="Search" />
    </header>
  );
};

export default Topbar;
