import React, { useState } from 'react';
import { calculateExpression } from '../utils/CommunFunctions';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const calculatedResult = calculateExpression(expression);
    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter expression (+ 3 4)"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <button className="btn btn-primary btn-block" onClick={calculate}>
        Calculate
      </button>
      <div className="mt-3">
        <strong>Result:</strong>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}

export default Calculator;
