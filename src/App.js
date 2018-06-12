import 'bulma-css';

import React from 'react';
import Navbar from './components/Navbar/Navbar.component';

class App extends React.Component {
  render() {
    return (
      <div className="app-component">
        <Navbar />

        <div className="container">
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  }
}

export default App;
