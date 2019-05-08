import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class MainApp extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<MainApp />, rootElement);