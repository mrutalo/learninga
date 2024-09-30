import React from 'react';

const Controls = ({ onStart, onStop, onReset }) => {
  return (
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
  );
};

export default Controls;
