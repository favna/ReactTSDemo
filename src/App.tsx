import ClassComponent from 'components/ClassComponent';
import ConnectedContainerComponent from 'components/ContainerComponent';
import FunctionalComponent from 'components/FunctionalComponent';
import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <br/>
          <ClassComponent title='TypeScript React App' subtitle={'It\'s Awesome!'}/>
          <br/>
          <ConnectedContainerComponent/>
          <br/>
          <FunctionalComponent title='Functional Components are nice and short' subtitle='But they have some drawbacks'/>
        </header>
      </div>
    );
  }
}

export default App;
