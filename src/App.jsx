import Container from './components/Container.jsx';

import './styles/root.scss';

function App() {
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> <span className="text-orange">TOE</span>
      </h1>

      <Container />

      <div className="bg-balls" />
    </div>
  );
}

export default App;
