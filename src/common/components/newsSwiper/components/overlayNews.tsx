import React from 'react';

const OverlayNews = () => {
  return (
    <div className="hover-overlay">
      <div
        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)' }}
      />
    </div>
  );
};

export default OverlayNews;
