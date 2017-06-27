import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = e => {

    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  submitIfValid = e => {
    e.preventDefault()
    this.state.username.length > 1 && this.state.password.length > 1 ? this.props.onSubmit : null
  }

  render() {
    return (
      <form onSubmit={this.submitIfValid}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
            name="username" value={this.state.username} 
            onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
            name="password" value={this.state.password}
            onChange={this.handleInput} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm
