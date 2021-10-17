import React, {
  useState,
} from 'react';

const Button = (props) => {
  const [result, setResult] =
    useState(null);

  return (
    <div>
      <button
        onClick={(e) => {
          setResult(
            props.value * 2
          );
        }}>
        MFE1 Button
      </button>
      <span>{result}</span>
    </div>
  );
};

export default Button;
