import React from "react";
import { BsPersonCheck, BsFillBellFill } from "react-icons/bs";
import { FaBookOpen, FaRupeeSign } from "react-icons/fa";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>ATTENDANCE</h3>
            <BsPersonCheck className="card-icon" />
          </div>
          <h1>73.4%</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>COURSE</h3>
            <FaBookOpen className="card-icon" />
          </div>
          <h1>MCA</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3> FEE STATUS</h3>
            <FaRupeeSign className="card-icon" />
          </div>
          <h1>PENDING</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>NOTICES</h3>
            <BsFillBellFill className="card-icon" />
          </div>
          <h1>4</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
