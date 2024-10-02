import React from 'react';

const Controls = ({ onSubmit, onStart, onStop, onReset }) => {
  return (
    <div>
<div className="mb-4"> {/* Add margin below the textbox */}
        <input
          type="text"
          value={"text"} // Update state on text change
          className="text-black font-bold py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={onSubmit} // Use the text state when submitting
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Submit
        </button>
      </div>
    
    <div className="controls flex space-x-4">
      
      <button
        onClick={onStart}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Start
      </button>
      <button
        onClick={onStop}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Stop
      </button>
      <button
        onClick={onReset}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
    </div>
  );
};

export default Controls;
