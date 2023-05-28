// Write your JS code here

const CryptocurrencyItem = ({item}) => {
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  return (
    <li className="table-item">
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>COIN TYPE</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
