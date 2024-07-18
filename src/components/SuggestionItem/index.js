// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, suggestionItemValue} = props
  const {suggestion} = suggestionItemDetails

  const onSuggestion = () => {
    suggestionItemValue(suggestion)
  }

  return (
    <li className="list_item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={onSuggestion}>
        <img
          className="arrow_img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
