// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = ({currencyList}) => {
  console.log(currencyList)
  return (
    <div className="tracker-container">
      <h1 className="title">cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="list-container">
        <li className="table-head" key="head">
          <p>COIN TYPE</p>
          <div>
            <p>USD</p>
            <p>EURO</p>
          </div>
        </li>
        {currencyList.map(each => (
          <CryptocurrencyItem item={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
