import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './coin';
import { Container } from 'react-bootstrap';

function App() {
  const [coins, setcoins] = useState([]);
  const [search, setsearch] = useState('');
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setcoins(res.data);
      })
      .catch((error) => {
        console.log('No network or your link is broken ');
      });
  }, []);

  const changehandler = (e) => {
    setsearch(e.target.value);
  };
  const filtercoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='App'>
      <Container className='App-header' fluid>
        <h2>Cryptocurrency Prices by Market Cap</h2>
        <p>
          The global cryptocurrency market cap today is $1.99 Trillion, a 0.3%
          change in the last 24 hours. Total cryptocurrency trading volume in
          the last day is at $129 Billion. Bitcoin dominance is at 42.4% and
          Ethereum dominance is at 17.8%. CoinGecko is now tracking 8,982
          cryptocurrencies. Popular trends of the industry right now are DeFi
          and Play to Earn.
        </p>
        <center>
          <div>
            <form action=''>
              <input
                type='search'
                placeholder='search a curency eg bitcoin'
                onChange={changehandler}
              />
            </form>
          </div>
        </center>
        <div className='titles'>
          <div>
            <h3>#</h3>
          </div>
          <div>
            <h3>coin</h3 >
          </div>
          <div>
            <h3>price</h3>
          </div>
          <div>
            <h3>24h</h3>
          </div>
          <div>
            <h3 className="remove">volume</h3>
          </div>
          <div>
            <h3 className="remove">Market cap</h3>
          </div>
          <div>
            <h3 className="remove">last 7 days</h3>
          </div>
        </div>
      </Container>
      <div>
        {filtercoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              price={coin.current_price}
              volume={coin.total_volume}
              itemdata={coin}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
