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
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
