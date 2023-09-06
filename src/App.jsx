import Board from './components/Board';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <div>
        <button
          onClick={() => {
            console.log('hello');
          }}
        >
          Click me please
        </button>
      </div>
    </div>
  );
}

export default App;
