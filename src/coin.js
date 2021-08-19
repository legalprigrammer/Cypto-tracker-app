import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './coin.css';
import green from './sparklinegreen.svg'
import red from './sparkline.svg'
const Coin = ({ name, image, symbol, price, volume, itemdata }) => {
  return (
    <>
      <Container fluid>
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
              <span>{itemdata.market_cap_rank}</span>
              <img src={image} alt='crypto' />
              <strong>{name}</strong>
            </div>
            <div className='coin-data'>
              <p className='symbol'>{symbol}</p>
              <p className='coin-price'>${price}</p>
              {itemdata.price_change_percentage_24h < 0 ? (
                <p className='coin-percent red'>
                  {itemdata.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : (
                <p className='coin-percent green'>
                  {itemdata.price_change_percentage_24h.toFixed(2)}%
                </p>
              )}
            </div>
            <div className='marketcap'>
              <p className='coin-volume'>${volume.toLocaleString()}</p>
              <p className='market_cap'>
                ${itemdata.market_cap.toLocaleString()}
              </p>
              <div className="graphs">
                {itemdata.price_change_percentage_24h < 0 ? (
                   <img src={red} alt='' className="graph" />
                ) : (
                  <p className='coin-percent'>
                    <img src={green} alt="" className="graph" />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Coin;
