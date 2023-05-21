import { useState } from 'react';
import { FaUser, FaFile, FaChartBar } from 'react-icons/fa';
import '../styles/Sidebar.css';

export function Sidebar() {
  const [isExpanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-header">
        <FaUser className="sidebar-icon" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <FaFile className="sidebar-icon" />
        </li>
        <li className="sidebar-menu-item">
          <FaChartBar className="sidebar-icon" />
        </li>
      </ul>
    </div>
  );
}
