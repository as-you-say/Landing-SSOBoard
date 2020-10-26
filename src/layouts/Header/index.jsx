import React from 'react';
import { FaGg } from "react-icons/fa";
import { 
  IoMdMailUnread, 
  IoMdMail, 
  IoMdSearch,
  IoIosSettings 
} from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header" className="header">
      {/* Logo */}
      <Link to="/">
      <h1 className="logo">
        <FaGg />
        <span className="text">S. Board</span>
      </h1>
      </Link>
      {/* //Logo */}

      {/* Profile */}
      <div className="profile">
        <div className="search">
          <input type="text" placeholder="검색" />
          <IoMdSearch />
        </div>
        <a className="menu" href="#">
          <IoMdMailUnread />
        </a>
        <a className="menu" href="#">
          <IoIosSettings />
        </a>
        <a className="menu" href="#">
          <div className="image">
            <img 
              src="/profile.jpg"
              alt="프로필 사진"
            />
          </div>
        </a>
      </div>
      {/* //Profile */}
    </header>
  )
}
