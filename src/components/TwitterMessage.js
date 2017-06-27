import React from 'react'

class TwitterMessage extends React.Component {
  constructor(prop) {
    super(prop)

    this.state = {
      value: ''
    }
  }

  charsLeft = () => {
    return this.props.maxChars - this.state.value.length
  }

  handleInput = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          onChange={this.handleInput}
          value={this.state.value}
        />
        <strong>{this.charsLeft()}</strong>
      </div>
    )
  }
}

export default TwitterMessage