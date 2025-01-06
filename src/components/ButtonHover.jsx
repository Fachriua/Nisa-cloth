import  { useState } from 'react';

function ButtonHover() {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      className="h-20 w-20 flex items-center justify-center"
    >
      {showButton && (
        <button
          className="btn btn-white btn-sm flex items-center"
        >
          Get Started
        </button>
      )}
    </div>
  );
}

export default ButtonHover;
