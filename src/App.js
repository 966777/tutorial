import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/Home/HomePage';
import ServicePage from './components/services/ServicePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/About/AboutPage';
import Marketing from './components/Maketing/Marketing';
import SupportPage from './components/Support/SupportPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

export const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the description for Card 1.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Card 2',
    description: 'This is the description for Card 2.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
];
