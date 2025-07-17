import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import {
  FaRegCalendarAlt,
  FaAward,
  FaWallet,
  FaBell,
  FaTasks,
  FaUser,
  FaGraduationCap,
} from "react-icons/fa";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FaGraduationCap className="icon_header" /> SIS
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaRegCalendarAlt className="icon" /> Time Table
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaAward className="icon" /> Grades
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaWallet className="icon" /> Fee Status
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaBell className="icon" /> Notices
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaTasks className="icon" /> Assignments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaUser className="icon" /> Profile
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
