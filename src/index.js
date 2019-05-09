import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

class MainApp extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<MainApp />, rootElement);