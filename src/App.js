import { BrowserRouter } from 'react-router-dom';
import Header from './components/headerComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
