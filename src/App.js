// import { Search } from 'components/Search';
// import userList from 'mocks/mockUsers.json';
import logo from './logo.svg';
import './App.css';
import { ViewBox } from 'components/ViewBox';

function App() {
  // const names = userList.map(({ name }) => name);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        {/* <Search names={names} /> */}
        <ViewBox />
      </main>
    </div>
  );
}

export default App;
