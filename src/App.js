// import logo from './logo_LCDMN.jpg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>

        <Route path="/" element={
        <Home />} />
          {/* <Header className="App-header"/>
          <Home className="App-home"/>
          <Footer className="App-footer"/> */}
        
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
