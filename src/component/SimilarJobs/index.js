import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

const SimilarJobs = props => {
  const {jobDetails} = props

  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails

  return (
    <li className="similar-list-container">
      <div className="logo-container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo-url"
        />

        <div>
          <h1 className="company-logo-title">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-icon" />
            <p className="count-rating">{rating}</p>
          </div>
        </div>
      </div>

      <h1 className="similar-description-heading">Description</h1>

      <p className="similar-decription">{jobDescription}</p>

      <div className="location-container-flex-justify">
        <div className="responsive">
          <GoLocation className="location-logo" />
          <p className="location-description">{location}</p>
        </div>

        <div className="responsive">
          <BsBriefcaseFill className="loaction-logo-brief" />
          <p className="location-description">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
