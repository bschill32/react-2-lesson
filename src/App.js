import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Note from './components/Note'
import PropsDisplay from './components/PropsDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appTitle: 'Testing',
      appText: 'Hello',
      name: 'Zach',
      age: 25,
      hobbies: [
        'rock climbing',
        'gaming',
        'teaching react',
        'css all day every day',
        'sarcasm'
      ],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  logger() {
    console.log('Hello')
  }

  handleChange(value) {
    console.log('value', value)
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <Note 
        title="Hello"
        text="World"></Note>
        <Note 
        title="Foo"
        text="Bar"></Note>
        <Note 
        title={this.state.appTitle}
        text={this.state.appText}></Note> */}
        <PropsDisplay
        name={this.state.name}
        age={this.state.age}
        hobbies={this.state.hobbies}
        logger={this.logger}
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
