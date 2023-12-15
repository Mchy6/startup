import React from 'react';
import './about.css';

export function About(props) {

  const swiftBackgroundStyle = {
    backgroundImage: 'url("treeSwallow.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main className='container-fluid bg-secondary text-center' style={swiftBackgroundStyle}>
      <div>
        <p>This is a website intended to teach people how to learn bird calls, </p>
        <p>developed by Matthew Bailey for his C S 260 Web Programming class.</p>
      </div>
    </main>
  );
}
