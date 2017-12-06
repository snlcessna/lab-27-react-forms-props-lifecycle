'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import superagent from 'superagent';

const main = document.getElementById('root');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <h1>Reddit Board Search</h1>
      <SearchForm />
      </div>
    );
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  changeValue = (event) => {
    this.setState({subReddit: event.target.value});
  }

  changeThread = (event) => {
    this.setState({redditThreads: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    superagent.get(`https://www.reddit.com/r/${this.state.subReddit}.json?limit=${this.state.redditThreads}`)
    .then((results) => {
      this.setState({finding: results.body.data.children});
    }).catch(console.log);

  }
  renderThreads = () => {
      if(this.state.finding) return this.state.finding.map(thread => {
        return <SearchResultList listItem={thread}/>;
      });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.subReddit} onChange={this.changeValue} />
        </label>
        <br />
        <label>
          Thread Limit:
          <input type="text" value={this.state.redditThreads} onChange={this.changeThread} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>{this.renderThreads()}</ul>
      </div>
    );
  }
}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
}
render() {
  return (
    <li><a href={this.props.listItem.data.url}><h3>{this.props.listItem.data.title}</h3><p>{this.props.listItem.data.ups}</p></a></li>
  )
}
}

ReactDOM.render(<App />, main);
