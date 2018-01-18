import React from 'react';

const Main = ({className, children}) => (
  <main className={className}> {/* attach passed generated className to DOM */}
    <h1>
      Main
    </h1>
    {children}    
  </main>
);

export default Main;
