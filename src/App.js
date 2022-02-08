import './App.css';
import { Intro } from './components/Intro';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Bar content={<Content/>} header={<Header />}/>} />
      </Routes> */}
      <Intro />
      <About />
    </div>
  );
}

export default App;
