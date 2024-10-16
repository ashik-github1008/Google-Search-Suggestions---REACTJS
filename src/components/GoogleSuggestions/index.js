// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  clickSuggestion = suggestion => {
    // console.log('click suggestion')
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="main-container">
          <img
            className="google-img mb-4"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
          <div className="search-container">
            <div className="input-search-container mb-3">
              <img
                className="search-icon-img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestion-list-container mt-4">
              {searchResults.map(eachList => (
                <SuggestionItem
                  key={eachList.id}
                  listDetails={eachList}
                  clickSuggestion={this.clickSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
