'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {say} from 'cowsay';

const main = document.getElementById('root');

class Cows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: 'Original message'}
  }

  updateContent = () => {
    console.log('Changed the what the cow said using updateContent function');
    this.setState({content: 'Changed the content!'});
  }
  sayCowSay = () => {
   return say({text: this.state.content});
 }
  render() {
    return (
      <div>
      <h1>Generate Cowsay Lorem</h1>
      <pre>
        {this.sayCowSay()}
      </pre>
      <button onClick={this.updateContent}>Click me!</button>
      </div>
    )
  }
}

ReactDOM.render(<Cows/>, main);
