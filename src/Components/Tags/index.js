import {Component} from 'react'

class Tags extends Component {
  renderList = () => {
    const {eachList} = this.props
    const {inputIdList, optionIdList} = eachList[0]
    const last = optionIdList.slice(1).toLowerCase()

    const text = optionIdList[0].toUpperCase() + last

    return (
      <li>
        <div key={inputIdList}>
          <p>{inputIdList}</p>
          <p>{text}</p>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default Tags
