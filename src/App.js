import logo from './logoipsum.svg';
import './App.css';

function App() {
  const url = process.env.REACT_APP_API_URL;
  const message = window._env_.APP_MESSAGE || "NOT WELCOME MESSAGE"
  console.log("app message is : " + message);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{message}</h3>
        <h3>Url : {url}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Quotes Stateless
        </a>
      </header>
    </div>
  );
}

export default App;
