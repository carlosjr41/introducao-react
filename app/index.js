import { Component } from 'react';
import { render as _render } from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        HelloWorld
      </div>

    )
  }
}


_render(<App/>, document.getElementById('app'));