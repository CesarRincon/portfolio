import './App.css';
import { Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import Content from './components/SobreMi';
import Header from './components/Header';
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
