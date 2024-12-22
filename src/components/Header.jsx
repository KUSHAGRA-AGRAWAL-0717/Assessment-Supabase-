import React from 'react';
import './header.css';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  const data = [
    { Icon: ReportGmailerrorredOutlinedIcon, name: "Dashboard" },
    { Icon: MarkUnreadChatAltIcon, name: "Students" },
    { Icon: LinearScaleIcon, name: "Chapter" },
    { Icon: LiveHelpIcon, name: "Help" },
  ];

  return (
    <nav className="header">
      {/* Logo/Search Section */}
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75L19.5 19.5M10.5 18.75a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search your course"
          className="search-input"
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {data.map((item, index) => (
          <div key={index} className="nav-item">
            <item.Icon className="nav-icon" /> {/* Render icon directly */}
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="profile-container">
       <AccountCircleIcon className='profile-icon'/>
        <p className="profile-name">Kabir Coder</p>
      </div>
    </nav>
  );
};

export default Header;
