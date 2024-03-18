import { useEffect, useState } from 'react';

import { ITicker } from '../../types/interfaces';
import { Coin } from '../../types/types';
import CurrencySelector from '../CurrencySelectorOld/CurrencySelector';
import ExchangeIcon from '../icons/ExchangeIcon/ExchangeIcon';
import styles from './Converter.module.scss';

// interface ConverterProps {}

const Converter = () => {
  const [prices, setPrices] = useState<ITicker[]>();
  const [coin1, setCoin1] = useState<Coin>();
  const [coin2, setCoin2] = useState<Coin>();

  const getPrices = async () => {
    try {
      const response = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT"]',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: ITicker[] = await response.json();

      setPrices(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getPrices();
    const intervalId = setInterval(() => {
      getPrices();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.Converter}>
      <div className={styles.currencySelectors}>
        <div className={styles.currencySelector}>
          <CurrencySelector />
        </div>
        <div className={styles.exchangeIcon}>
          <ExchangeIcon color={'rgb(161, 161, 161)'} />
        </div>
        <div className={styles.currencySelector}>
          <CurrencySelector />
        </div>
      </div>
      <div>1 Эфереум = 1 биткоин</div>
      <div>Данные носят ознакомительный характер и вообще ты лох</div>
    </div>
  );
};

export default Converter;
