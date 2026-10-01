import React, { useEffect } from 'react';

export const Formular230 = ({ 
  children = 'Redirecționează 3,5%', 
  className = '' 
}) => {
  useEffect(() => {
    const SCRIPT_SRC = 'https://formular230.ro/share/aa0c73e42b3';
    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);

    if (!script) {
      script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    } else if (window.f230ro && typeof window.f230ro.initAll === 'function') {
      window.f230ro.initAll();
    }
  }, []);

  return (
    <button type="button" className={`f230ro-lansare ${className}`}>
      {children}
    </button>
  );
};

export default Formular230;