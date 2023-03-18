import {Component} from 'react'
import Context from '../../Context'
import Total from '../Total'

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

class Home extends Component {
  state = {
    listOfTasks: [],
    inputValue: '',
    optionValue: 'HEALTH',
  }

  changingVal = event => {
    this.setState({inputValue: event.target.value})
  }

  changingOption = event => {
    this.setState({optionValue: event.target.value})
  }

  addingList = event => {
    event.preventDefault()
    const {optionValue, inputValue} = this.state

    this.setState(prevState => ({
      listOfTasks: [
        ...prevState.listOfTasks,
        [{optionIdList: optionValue, inputIdList: inputValue}],
      ],
    }))
  }

  clicksOfVisit = optionId => {
    const {initialOption} = this.state
    this.setState({initialOption: optionId})
  }

  render() {
    const {listOfTasks, optionValue} = this.state

    return (
      <div>
        <form onSubmit={this.addingList}>
          <h1>Create a task</h1>
          <div>
            <label htmlFor="task">Task</label>
            <input
              id="task"
              onChange={this.changingVal}
              placeholder="Enter the task here"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="select">Tags</label>
            <div>
              <select id="select" onChange={this.changingOption}>
                {tagsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add Task</button>
            </div>
          </div>
        </form>
        <Total listOfTasks={listOfTasks} />
      </div>
    )
  }
}

export default Home
