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
            props.intValue * 2
          );
        }}>
        MFE1 Button
      </button>
      <div>{result}</div>
    </div>
  );
};
export default Button;
