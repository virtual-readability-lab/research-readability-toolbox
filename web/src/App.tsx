import styles from "./App.module.css"
import {defaultTheme, Heading, Provider} from "@adobe/react-spectrum";
import Main from "./components/Main";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <header className={styles.Header}>
        <div style={{flexDirection: 'column'}}>
          <Heading level={2} marginBottom="0" marginTop="0">Reading Controls Test</Heading>
        </div>
      </header>
      <Main />
      <footer className={styles.Footer}>
        <span className={styles.Left}>Copyright &copy; 2021 Adobe, Inc.</span>
        <span className={styles.Center}>Release: 2021/08/23</span>
        <span />
      </footer>
    </Provider>
  );
}

export default App;
//        <a className={styles.Right}>Help</a>
