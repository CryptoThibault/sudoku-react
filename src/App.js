import SudokuApp from './components/SudokuApp'
import gridList from './gridList'

function App() {
  return (
    <div className="App">
      <SudokuApp startgrid={gridList[0]}/>
    </div>
  );
}

export default App;
