import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Introduction from './Pages/Introduction.jsx';
import Contract from './Pages/Contract.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/contract" element={<Contract />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;