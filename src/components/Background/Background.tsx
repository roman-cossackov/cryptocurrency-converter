import { ReactNode } from 'react';

import styles from './Background.module.scss';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const liArray = new Array(10).fill('');
  return (
    <div className={styles.background}>
      <div className={styles.area}>
        <ul className={styles.circles}>
          {liArray.map((a, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Background;
