import React from 'react';
import ScrollToTop from '../index';

const App: React.FC = () => {
  const Style: React.CSSProperties = {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    color: '#4e9afa',
    backgroundColor: '#ffffff',
    boxShadow:'1px 1px 8px rgba(0.2,0.3,0.2,0.4)',
    // boxshadow: 1px 0px 10px rgba(0.2, 0.3, 0.2, 0.4);
    width: '100px',
    height: '40px',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  };
 
  return (
    <div style={{ height: '100px' }}>
      <span>让滚动条飞一会</span>      
      <ScrollToTop showUnder={400} style={Style}  />
    </div>
  );
};

export default App;
