import './App.css';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { ProductList } from './components/ProductList/ProductList';
import { Contact } from './components/Contact/Contact';
import { Toggle } from './components/Toggle/Toggle';
import { ThemeContext } from './context'
import { useContext } from 'react'


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App' style={{ backgroundColor: darkMode ? "#222" : "rgb(216, 215, 215)",
    color: darkMode && "white"}}>
      {/* <Routes>
        <Route path="/" element={<Bar content={<Content/>} header={<Header />}/>} />
      </Routes> */}
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
