import React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';

const tabs = [
  { id: 'home', label: 'Home', icon: <AutoStoriesIcon /> },
  { id: 'esplora', label: 'Esplora', icon: <ExploreIcon /> },
  { id: 'autori', label: 'Autori', icon: <PeopleIcon /> },
];

const BottomNav = React.memo(({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`bottom-nav-item${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-label={tab.label}
          >
            {tab.icon}
            <span className="bottom-nav-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
});

export default BottomNav;
