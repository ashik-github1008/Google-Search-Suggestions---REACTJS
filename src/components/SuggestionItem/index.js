// Write your code here

import './index.css'

// import clickSuggestion from '../GoogleSuggestions/index'

const SuggestionItem = props => {
  const {listDetails, clickSuggestion} = props

  const {suggestion} = listDetails

  const onArrow = () => {
    clickSuggestion(suggestion)
    // console.log('arrow')
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon mb-3"
        onClick={onArrow}
      />
    </li>
  )
}

export default SuggestionItem
