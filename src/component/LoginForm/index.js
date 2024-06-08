import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    redirectToHome: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, secure: true})
    this.setState({redirectToHome: true})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {'Content-Type': 'application/json'},
      })
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg || 'Unknown error occurred')
      }
    } catch (error) {
      console.error('Error occurred:', error)
      this.onSubmitFailure('Network error occurred')
    }
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <div className="user-container">
          <label htmlFor="userName" className="title">
            USERNAME
          </label>{' '}
          <br /> <br />
          <input
            type="text"
            id="userName"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUserName}
            className="user-input"
          />
        </div>
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <div>
          <label htmlFor="password" className="title">
            PASSWORD
          </label>
          <br /> <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
            className="user-input"
          />
        </div>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, redirectToHome} = this.state

    if (redirectToHome) {
      return <Redirect to="/" />
    }

    return (
      <div className="jobby-app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUserName()}</div>
            <div className="password-container">{this.renderPassword()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
