import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App running")

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
