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
    width: '200px'
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

  const labelStyles = {
    color: '#000',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div className='flex items-center mb-6 text-gray-700 gap-5 justify-center'>
        <div>
            {star}
        </div>
      <div style={barStyles}>
        <div style={fillStyles}></div>
      </div>
      {<div>{label}</div>}
    </div>
  );
}

export default ProgressBar;
