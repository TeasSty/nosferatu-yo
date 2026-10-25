import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToHash } from './components/ScrollToHash';
import { BASE_URL } from './lib/paths';
import { HomePage } from './pages/HomePage';
import { QuestPage } from './pages/QuestPage';
import { QuestsPage } from './pages/QuestsPage';

const basename = BASE_URL.replace(/\/$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/quests/:id" element={<QuestPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
