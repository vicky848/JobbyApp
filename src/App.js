import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './component/LoginForm'
import ProtectedRoute from './component/ProtectedRoute'
import Home from './component/Home'
import NotFound from './component/NotFound'
import JobItemDetails from './component/JobItemDetails'
import Jobs from './component/Jobs'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
