import React from 'react'

const Context = React.createContext({
  inputValue: '',
  changingVal: () => {},
  addingList: () => {},
  changingOption: () => {},
  listOfTasks: '',
  optionValue: '',
  initialOption: '',
  clickOfOption: () => {},
})

export default Context
