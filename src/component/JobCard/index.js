import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker, HiMail} from 'react-icons/hi'
import {Link} from 'react-router-dom'

import './index.css'

const JobCard = ({jobDetails}) => {
  const {
    title,
    companyLogoUrl,
    rating,
    employmentType,
    location,
    id,
    packagePerAnnum,
    jobDescription,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`}>
      <li className="job-item-list">
        <div className="company-main-container">
          <div>
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
          </div>
          <div>
            <h1 className="company-title">{title}</h1>
            <div className="star-icon-container">
              <AiFillStar className="star-icon" />
              <p className="rating-count">{rating}</p>
            </div>
          </div>
        </div>

        <div className="location-container-flex-content">
          <div className="location-des">
            <div className="star-icon-container">
              <HiLocationMarker className="location-icon" />
              <p className="location-desc description">{location}</p>
            </div>

            <div className="star-icon-container">
              <HiMail className="location-icon left-icon" />
              <p className="emp-type text">{employmentType}</p>
            </div>
          </div>

          <div className="star-icon-container">
            <p className="package-desc description">{packagePerAnnum}</p>
          </div>
        </div>

        <hr className="line" />
        <h1 className="text-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
