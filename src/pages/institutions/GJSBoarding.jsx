import React from 'react';

const GJSBoarding = () => {
  return (
    <iframe
      src="/kidearn-theme/gjs-boarding-index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block'
      }}
      title="Gombe Junior School - Boarding Campus"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
    />
  );
};

export default GJSBoarding;
