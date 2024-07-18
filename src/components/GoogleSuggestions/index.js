// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  eachSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const suggestionsList = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app_container">
        <div className="google_container">
          <img
            className="google_img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search_display_container">
            <div className="searchinput_container">
              <img
                className="google_img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search_input"
                value={searchInput}
                placeholder="Search Google"
                type="search"
                onChange={this.onSearchChange}
              />
            </div>
            <ul className="suggestion_display_list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionItemDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  suggestionItemValue={this.suggestionItemValue}
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
