import logo from './logo.svg';
import './App.css';
import s from './app.module.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className={s.container}>
          <div className={s.timer}></div>
          <div className={s.cards}></div>
          <button className={s.start}>start</button>

        </div>
      </header>
    </div>
  );
}

export default App;
