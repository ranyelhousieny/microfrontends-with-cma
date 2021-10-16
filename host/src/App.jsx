import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const MFE1_Button =
  React.lazy(() =>
    import('MFE1/Button')
  );

const App = () => (
  <div className='container'>
    <React.Suspense fallback='Loading Button'>
      <MFE1_Button test='3' />
    </React.Suspense>
    <div>Name: host</div>
    <div>
      Framework: react
    </div>
    <div>
      Language: JavaScript
    </div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);
