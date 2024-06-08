import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-main-container">
        <div className="responsive-container">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="job-paragraph">
            Millions of people are searching for jobs. salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link to="/jobs" className="link-item">
            <button type="button" className="find-job">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home
