import React from 'react';
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HelpIcon from '@mui/icons-material/Help';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ReportIcon from '@mui/icons-material/Report';
import TableViewIcon from '@mui/icons-material/TableView';

const Sidebar = () => {
  const data = [
    { Icon: DashboardIcon, name: "Dashboard" },
    { Icon: BackupTableIcon, name: "Students" },
    { Icon: TableViewIcon, name: "Chapter" },
    { Icon: HelpIcon, name: "Help" },
    { Icon: ReportIcon, name: "Reports" },
    { Icon: SettingsSuggestIcon, name: "Settings" },
  ];

  return (
    <div className="container text-center">
      <div className="sidebar-heading">
        <h1>Quyl.</h1>
      </div>
      <div className="sidebar-icons">
        {data.map((item, index) => (
          <div className="icon" key={index}>
            <item.Icon className="icon-style" /> {/* Render the Material-UI icon */}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
