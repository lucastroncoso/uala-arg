import type { FunctionComponent } from 'react';
import styles from './MainPage.module.scss';

const MainPage: FunctionComponent = () => {
  return (
    <main id={styles.main} className="content-wrapper">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </main>
  );
};

export default MainPage;
