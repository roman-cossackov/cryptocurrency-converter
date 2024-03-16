import CurrencySelector from '../CurrencySelector/CurrencySelector';
import styles from './Converter.module.scss';

// interface ConverterProps {}

const Converter = () => {
  return (
    <div className={styles.Converter}>
      <CurrencySelector />
    </div>
  );
};

export default Converter;
