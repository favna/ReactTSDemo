import logo from './logo.svg';
import React, { Component } from 'react';
import ClassComponent from 'src/components/ClassComponent';
import ConnectedContainerComponent from 'src/components/ContainerComponent';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <br/>
          <ClassComponent title='TypeScript React App' subtitle={'It\'s Awesome!'} />
          <br />
          <ConnectedContainerComponent />
        </header>
      </div>
    );
  }
}

export default App;
