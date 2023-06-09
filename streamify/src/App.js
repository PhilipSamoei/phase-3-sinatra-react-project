import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Navbar from './components/Navbar';
import CardList from './components/Movie'
import SignUp from './components/SignUp';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Slideshow />} />
          <Route path="/movies" element={<CardList />} />
          <Route path="/mymovies" element={<MovieForm/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
