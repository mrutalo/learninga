import React from 'react';

const ChatWindow = () => {
  return (
    <div className="chat-window h-[500px] overflow-y-auto border border-gray-300 p-4">
      <div className="chat-messages flex flex-col space-y-4">
        <div className="message user-message self-end">
          <div className="message-bubble bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[70%]">
            Hello! How can I help you today?
          </div>
        </div>
        <div className="message system-message self-start">
          <div className="message-bubble bg-gray-200 text-black px-4 py-2 rounded-lg max-w-[70%]">
            Hi there! I'm here to assist you with any questions you might have. Feel free to ask about anything!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
