// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      const formatedData = data.map(each => ({
        currencyLogo: each.currency_logo,
        currencyName: each.currency_name,
        euroValue: each.euro_value,
        usdValue: each.usd_value,
        id: each.id,
      }))

      this.setState({currencyList: [...formatedData], isLoading: false})
    }
  }

  renderLoder = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00e7ff" width="100" height="100" />
    </div>
  )

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          this.renderLoder()
        ) : (
          <CryptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
