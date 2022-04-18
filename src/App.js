import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!
        </p>
        <a
          className="Excel-link"
          href="https://docs.google.com/spreadsheets/d/1_RyT4Af2-h3I4QhH54W8xKC2mMbebXPHp1qDH9N4BL8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Excel Data
        </a>
        <a
          className="Manual-link"
          href="https://docs.google.com/document/d/1B01L0DdIiTkL5GGSegKxEHFT2ej8w_uey8H95bxRleA/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          User Manual
        </a>
      </header>
    </div>
  );
}

export default App;
