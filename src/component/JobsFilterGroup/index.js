import ProfileDetails from '../ProfileDetails'

import './index.css'

const JobsFilterGroup = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employ => {
      const {changeEmploymentType} = props
      const onChangeEmploymentType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list-item"
          key={employ.employmentTypeId}
          onChange={onChangeEmploymentType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label className="checkbox-label" htmlFor={employ.employmentTypeId}>
            {employ.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props

      const onChangeSalary = () => changeSalaryRange(salary.salaryRangesId)

      return (
        <li
          className="checkbox-list-item"
          key={salary.salaryRangesId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="checkbox-radio"
            id={salary.salaryRangesId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangesId} className="checkbox-lebal">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="hr-line" />
      {renderEmploymentType()}
      <hr className="hr-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default JobsFilterGroup
