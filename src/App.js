// import logo from './logo_LCDMN.jpg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Home className="App-home"/>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
