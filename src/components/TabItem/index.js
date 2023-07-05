import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, onClickTab} = props
  const {displayText, tabId} = tabDetails
  const activeClass = activeTabId ? 'active-tab' : ''
  const changeTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className="li-container">
      <button
        onClick={changeTab}
        className={`tab-item  ${activeClass}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
