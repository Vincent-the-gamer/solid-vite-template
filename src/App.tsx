import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';
import { createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          编辑 <code>src/App.tsx</code> 然后保存，它就会自动刷新
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid(学习Solid)
        </a>
        <button 
        class={styles.button} 
        onClick={() => setCount( (count: number) => count + 1 )}
        >  Count is: {count()} </ button>
      </header>
    </div>
  );
};

export default App;