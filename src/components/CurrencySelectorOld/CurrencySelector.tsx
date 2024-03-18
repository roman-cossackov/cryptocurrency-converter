import styles from './CurrencySelector.module.scss';

// interface CurrencySelectorProps {
//   options
// }

const CurrencySelector = () => {
  return (
    <div className={styles.CurrencySelector}>
      <input type="text" />
      <select name="" id="">
        <option></option>
        <option>Биткуин</option>
        <option>Эфер</option>
        <option>Юсдт</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
