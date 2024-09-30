import React from 'react';

import Controls from './Controls';
import ChatWindow from './ChatWindow';

function Overall() {
  return (
    <div className="chat-interface">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Hello Again World</h1>
      </header>

      <div className='chat-window'>
        <ChatWindow/>
      </div>
     
      <div className="chat-controls">
        <Controls />
      </div>
    </div>
  );
}

export default Overall;
