import React, { useState, useEffect } from 'react';

function ProgressBar({ percentage, label , star }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const barStyles = {
    backgroundColor: '#f1f1f1',
    height: '15px',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    // width: '150px'
  };

  const fillStyles = {
    backgroundColor: '#4CAF50',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    transition: 'width 0.5s ease-in-out',
    width: `${progress}%`,
    borderRadius: '10px'
  };

  return (
    <div className='flex items-center mb-6 text-gray-700 gap-5 justify-center'>
        <div>
            {star}
        </div>
      <div style={barStyles} className='xl:w-96 md:w-60 w-36'>
        <div style={fillStyles}></div>
      </div>
      {<div>{label}</div>}
    </div>
  );
}

export default ProgressBar;
