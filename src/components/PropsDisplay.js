import React, {Component} from 'react'
//Components 
import Note from './Note'

export default class PropsDisplay extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Hello',
            text: 'World'
        }
    }
    render() {
        return (
            <div>
                <Note 
                title={this.state.title}
                text={this.state.text}
                ></Note>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                {
                    this.props.hobbies.map( (hobby, i) => {
                        return (
                            <p key={i}>{hobby}</p>
                        )
                    })
                }
                <button onClick={this.props.logger}>Click Me!</button>
                {this.props.inputValue}
                <input value={this.props.inputValue} onChange={(e) => this.props.handleChange(e.target.value)}/>
                {/* <input value={this.props.inputValue} onChange={this.props.handleChange}/> */}
            </div>
        )
    }
}