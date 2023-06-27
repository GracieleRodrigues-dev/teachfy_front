import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import NotFound from './pages/NotFound';
import { SignUpPage } from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import NewDeckPage from './pages/NewDeckPage';
import NewDeckAvaliativoPage from './pages/NewDeckAvaliativoPage1';
import DeckAvaliativoPage from './pages/NewDeckAvaliativoPage';

import NewDeckFlashCardPage from './pages/NewDeckFlashCardPage';
import NewDeckFlashCardByMePage from './pages/NewDeckFlashCardByMePage';
import NewDeckAvaliativoByMePage from './pages/NewDeckAvaliativoByMePage';
import NewDeckAvaliativoByIAPage from './pages/NewDeckAvaliativoByIAPage ';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/decks/novo-deck" element={<NewDeckPage/>}/>
      <Route path="/decks/deck/avaliativo" element={<DeckAvaliativoPage/>}/>
      <Route path="/decks/novo-deck/avaliativo" element={<NewDeckAvaliativoPage/>}/>
      <Route path="/decks/novo-deck/flashcard" element={<NewDeckFlashCardPage/>}/>
      <Route path="/decks/novo-deck/flashcard/byMe" element={<NewDeckFlashCardByMePage/>}/>
      <Route path="/decks/novo-deck/avaliativo/byMe" element={<NewDeckAvaliativoByMePage/>}/>
      <Route path="/decks/novo-deck/avaliativo/byIA" element={<NewDeckAvaliativoByIAPage/>}/>
      {/* <Route path="/decks/novo-deck/flashcard/byAI" element={<NewDeckFlashCardPage/>}/> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
