import React from 'react';

const ResponsiveAppBar = React.memo(() => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <span className="app-header-title">Pillole Poetiche</span>
      </div>
    </header>
  );
});

export default ResponsiveAppBar;
