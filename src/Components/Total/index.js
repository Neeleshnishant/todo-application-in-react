import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tags from '../Tags'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Total extends Component {
  state = {
    initialOptionId: '',
    Health: false,
    Education: false,
    Entertainment: false,
    Sports: false,
    Travel: false,
    Others: false,
  }

  clickingHealth = () => {
    const {Health} = this.state
    console.log(Health)
    this.setState(prevState => ({
      Health: !prevState.Health,
      Education: false,
      Entertainment: false,
      Sports: false,
      Travel: false,
      Others: false,
    }))
  }

  clickingEducation = () => {
    this.setState(prevState => ({
      Education: !prevState.Education,
      Health: false,
      Sports: false,
      Travel: false,
      Others: false,
      Entertainment: false,
    }))
  }

  clickingEntertainment = () => {
    this.setState(prevState => ({
      Education: false,
      Health: false,
      Sports: false,
      Travel: false,
      Others: false,
      Entertainment: !prevState.Entertainment,
    }))
  }

  clickingTravel = () => {
    this.setState(prevState => ({
      Education: false,
      Health: false,
      Sports: false,
      Travel: !prevState.Travel,
      Others: false,
      Entertainment: false,
    }))
  }

  clickingSports = () => {
    this.setState(prevState => ({
      Education: false,
      Health: false,
      Sports: !prevState.Sports,
      Travel: false,
      Others: false,
      Entertainment: false,
    }))
  }

  clickingOthers = () => {
    this.setState(prevState => ({
      Education: false,
      Health: false,
      Sports: false,
      Travel: false,
      Others: !prevState.Others,
      Entertainment: false,
    }))
  }

  renderTask = () => {
    const {
      Health,
      Education,
      Sports,
      Travel,
      Others,
      Entertainment,
    } = this.state
    const {listOfTasks} = this.props
    let output = ''

    if (Health === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'HEALTH',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (Education === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'EDUCATION',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (Sports === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'SPORTS',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (Travel === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'TRAVEL',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (Others === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'OTHERS',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (Entertainment === true) {
      const filter = listOfTasks.filter(
        each => each[0].optionIdList === 'ENTERTAINMENT',
      )
      const final = filter.map(each => <Tags eachList={each} key={uuidv4()} />)
      output = final
    } else if (
      Entertainment === false &&
      Others === false &&
      Travel === false &&
      Sports === false &&
      Education === false
    ) {
      if (listOfTasks.length === 0) {
        return (
          <div>
            <p>No Tasks Added Yet</p>
          </div>
        )
      }
      const final = listOfTasks.map(each => (
        <Tags eachList={each} key={uuidv4()} />
      ))
      output = final
    }

    return output
  }

  render() {
    return (
      <div>
        <h1>Tags</h1>
        <ul>
          <li>
            <button onClick={this.clickingHealth} type="button">
              Health
            </button>
          </li>
          <li>
            <button onClick={this.clickingEducation} type="button">
              Education
            </button>
          </li>
          <li>
            <button onClick={this.clickingEntertainment} type="button">
              Entertainment
            </button>
          </li>
          <li>
            <button onClick={this.clickingSports} type="button">
              Sports
            </button>
          </li>
          <li>
            <button onClick={this.clickingTravel} type="button">
              Travel
            </button>
          </li>
          <li>
            <button onClick={this.clickingOthers} type="button">
              Others
            </button>
          </li>
        </ul>
        <h1>Tasks</h1>
        <div>{this.renderTask()}</div>
      </div>
    )
  }
}

export default Total
