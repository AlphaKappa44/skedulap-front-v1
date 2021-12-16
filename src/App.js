// import logo from './logo_LCDMN.jpg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import Signup from './components/Signup';


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
        <Route path="/formulaire_inscription" element={
        <Signup />} />
        
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
